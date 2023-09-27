export const imageFormats: Record<string, string> = {
	jpeg: '/9j/4',
	png: 'iVBORw0KGgoAAAANSUhEUgAA',
	gif: 'R0lGODlh',
	webp: 'UklGR',
	bmp: 'Qk02',
	tiff: 'SUkq',
	ico: 'AAAB',
	svg: 'PHN2Zy',
	pdf: 'JVBERi0',
};

export function getImageFormatFromBase64(base64String: string): string | null {
	const headerFormatLength = 30;
	const header = base64String.substring(0, headerFormatLength);

	for (const format in imageFormats) {
		if (header.startsWith(imageFormats[format])) {
			return format;
		}
	}

	return null;
}
