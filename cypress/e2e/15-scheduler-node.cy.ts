import { WorkflowPage, WorkflowsPage, NDV } from '../pages';

const workflowsPage = new WorkflowsPage();
const workflowPage = new WorkflowPage();
const ndv = new NDV();

describe('Schedule Trigger node', async () => {
	beforeEach(() => {
		cy.resetAll();
		cy.skipSetup();
		cy.visit(workflowsPage.url);
	});

	it('should execute and return the execution timestamp', () => {
		workflowsPage.actions.createWorkflowFromCard();
		cy.waitForLoad();
		workflowPage.actions.addInitialNodeToCanvas('Schedule Trigger');
		workflowPage.actions.openNode('Schedule Trigger');
		ndv.actions.execute();
		ndv.getters.outputPanel().contains('timestamp');
		ndv.getters.backToCanvas().click();
	});

	it('should execute once per second when activated', () => {
		workflowsPage.actions.createWorkflowFromCard();
		cy.waitForLoad();
		workflowPage.actions.renameWorkflow('Schedule Trigger Workflow');
		workflowPage.actions.addInitialNodeToCanvas('Schedule Trigger');
		workflowPage.actions.openNode('Schedule Trigger');

		cy.getByTestId('parameter-input-field').click();
		cy.getByTestId('parameter-input-field')
			.find('.el-select-dropdown')
			.find('.option-headline')
			.contains('Seconds')
			.click();
		cy.getByTestId('parameter-input-secondsInterval').clear().type('1');

		ndv.getters.backToCanvas().click();
		workflowPage.actions.saveWorkflowOnButtonClick();
		workflowPage.actions.activateWorkflow();
		workflowPage.getters.activatorSwitch().should('have.class', 'is-checked');

		cy.request('GET', '/rest/workflows')
			.then((response) => {
				expect(response.status).to.eq(200);
				expect(response.body.data).to.have.length(1);
				const workflowId = response.body.data[0].id.toString();
				expect(workflowId).to.not.be.empty;
				return workflowId;
			})
			.then((workflowId) => {
				cy.wait(1200);
				cy.request('GET', '/rest/executions')
					.then((response) => {
						expect(response.status).to.eq(200);
						expect(response.body.data.results.length).to.be.greaterThan(0);
						const matchingExecutions = response.body.data.results.filter(
							(execution: any) => execution.workflowId === workflowId,
						);
						expect(matchingExecutions).to.have.length(1);
						return workflowId;
					})
					.then((workflowId) => {
						cy.wait(1200);
						cy.request('GET', '/rest/executions')
							.then((response) => {
								expect(response.status).to.eq(200);
								expect(response.body.data.results.length).to.be.greaterThan(0);
								const matchingExecutions = response.body.data.results.filter(
									(execution: any) => execution.workflowId === workflowId,
								);
								expect(matchingExecutions).to.have.length(2);
							})
							.then(() => {
								workflowPage.actions.activateWorkflow();
								workflowPage.getters.activatorSwitch().should('not.have.class', 'is-checked');
								cy.visit(workflowsPage.url);
								workflowsPage.actions.deleteWorkFlow('Schedule Trigger Workflow');
							});
					});
			});
	});
});
