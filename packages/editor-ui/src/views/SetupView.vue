<template>
	<AuthView
		:form="FORM_CONFIG"
		:formLoading="loading"
		data-test-id="setup-form"
		@submit="onSubmit"
		@secondaryClick="showSkipConfirmation"
	/>
</template>

<script lang="ts">
import AuthView from './AuthView.vue';
import { showMessage } from '@/mixins/showMessage';

import mixins from 'vue-typed-mixins';
import { IFormBoxConfig } from '@/Interface';
import { VIEWS } from '@/constants';
import { restApi } from '@/mixins/restApi';
import { mapStores } from 'pinia';
import { useUIStore } from '@/stores/ui';
import { useSettingsStore } from '@/stores/settings';
import { useUsersStore } from '@/stores/users';
import { useCredentialsStore } from '@/stores/credentials';

export default mixins(showMessage, restApi).extend({
	name: 'SetupView',
	components: {
		AuthView,
	},
	async mounted() {
		const { credentials, workflows } = await this.usersStore.preOwnerSetup();
		this.credentialsCount = credentials;
		this.workflowsCount = workflows;
	},
	data() {
		const FORM_CONFIG: IFormBoxConfig = {
			title: this.$locale.baseText('auth.setup.setupOwner'),
			buttonText: this.$locale.baseText('auth.setup.next'),
			secondaryButtonText: this.$locale.baseText('auth.setup.skipSetupTemporarily'),
			inputs: [
				{
					name: 'firstName',
					properties: {
						label: this.$locale.baseText('auth.firstName'),
						maxlength: 32,
						required: true,
						autocomplete: 'given-name',
						capitalize: true,
					},
				},
				{
					name: 'lastName',
					properties: {
						label: this.$locale.baseText('auth.lastName'),
						maxlength: 32,
						required: true,
						autocomplete: 'family-name',
						capitalize: true,
					},
				},
				{
					name: 'email',
					properties: {
						label: this.$locale.baseText('auth.email'),
						type: 'email',
						required: true,
						validationRules: [{ name: 'VALID_EMAIL' }],
						autocomplete: 'email',
						capitalize: true,
					},
				},
				{
					name: 'password',
					properties: {
						label: this.$locale.baseText('auth.password'),
						type: 'password',
						required: true,
						validationRules: [{ name: 'DEFAULT_PASSWORD_RULES' }],
						infoText: this.$locale.baseText('auth.defaultPasswordRequirements'),
						autocomplete: 'new-password',
						capitalize: true,
					},
				},
				{
					name: 'phoneNumber',
					properties: {
						label: this.$locale.baseText('auth.phoneNumber'),
						type: 'text',
						required: true,
						validationRules: [{ name: 'PHONE_VALIDATION_RULES' }],
						infoText: this.$locale.baseText('auth.defaultPhoneNumberRequirements'),
					},
				},
				{
					name: 'agree',
					properties: {
						label: this.$locale.baseText('auth.agreement.label'),
						type: 'checkbox',
					},
				},
			],
		};

		return {
			FORM_CONFIG,
			loading: false,
			workflowsCount: 0,
			credentialsCount: 0,
		};
	},
	computed: {
		...mapStores(useCredentialsStore, useSettingsStore, useUIStore, useUsersStore),
	},
	methods: {
		async confirmSetupOrGoBack(): Promise<boolean> {
			if (this.workflowsCount === 0 && this.credentialsCount === 0) {
				return true;
			}

			const workflows =
				this.workflowsCount > 0
					? this.$locale.baseText('auth.setup.setupConfirmation.existingWorkflows', {
							adjustToNumber: this.workflowsCount,
					  })
					: '';

			const credentials =
				this.credentialsCount > 0
					? this.$locale.baseText('auth.setup.setupConfirmation.credentials', {
							adjustToNumber: this.credentialsCount,
					  })
					: '';

			const entities =
				workflows && credentials
					? this.$locale.baseText('auth.setup.setupConfirmation.concatEntities', {
							interpolate: { workflows, credentials },
					  })
					: workflows || credentials;
			return await this.confirmMessage(
				this.$locale.baseText('auth.setup.confirmOwnerSetupMessage', {
					interpolate: {
						entities,
					},
				}),
				this.$locale.baseText('auth.setup.confirmOwnerSetup'),
				null,
				this.$locale.baseText('auth.setup.createAccount'),
				this.$locale.baseText('auth.setup.goBack'),
			);
		},
		async onSubmit(values: { [key: string]: string | boolean }) {
			try {
				const confirmSetup = await this.confirmSetupOrGoBack();
				if (!confirmSetup) {
					return;
				}

				const registrationData = {
					name: values.firstName,
					lastName: values.lastName,
					email: values.email,
					password: values.password.toString(),
					phoneNumber: values.phoneNumber,
				};

				console.log('registrationData:', registrationData);

				const response = await fetch('http://localhost:3000/auth/register', {
					method: 'POST',
					body: JSON.stringify(registrationData),
					headers: {
						'Content-Type': 'application/json',
					},
				});

				console.log('response:', response);

				const responseData = await response.json();

				console.log('responseData:', responseData);

				if (!response.ok) {
					throw new Error('Registration failed');
				} else {
					try {
						console.log('Submitting contact email...');
						await this.uiStore.submitContactEmail(values.email.toString(), response.ok);
						console.log('Contact email submitted successfully');
					} catch (error) {
						console.error('Error submitting contact email:', error);
					}
				}
				this.loading = true;
				const forceRedirectedHere = this.settingsStore.showSetupPage;
				if (forceRedirectedHere) {
					console.log('Redirecting to homepage...');
					await this.$router.push({ name: VIEWS.HOMEPAGE });
				} else {
					console.log('Redirecting to users settings...');
					await this.$router.push({ name: VIEWS.USERS_SETTINGS });
				}
			} catch (error) {
				console.error('Error during registration:', error);
				this.$showError(error, this.$locale.baseText('auth.setup.settingUpOwnerError'));
			} finally {
				this.loading = false;
			}
		},

		async showSkipConfirmation() {
			const skip = await this.confirmMessage(
				this.$locale.baseText('auth.setup.ownerAccountBenefits'),
				this.$locale.baseText('auth.setup.skipOwnerSetupQuestion'),
				null,
				this.$locale.baseText('auth.setup.skipSetup'),
				this.$locale.baseText('auth.setup.goBack'),
			);
			if (skip) {
				this.onSkip();
			}
		},
		onSkip() {
			this.usersStore.skipOwnerSetup();
			this.$router.push({
				name: VIEWS.HOMEPAGE,
			});
		},
	},
});
</script>
