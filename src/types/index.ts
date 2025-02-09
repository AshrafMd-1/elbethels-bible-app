type LibraryType = {
	[key: string]: {
		children: {
			[key: string]: {
				children?: {
					[key: string]: {
						fileExtension: string
						id: string
						mimeType: string
						size: string
					}
				}
			}
		}
	}
}

export type { LibraryType }
