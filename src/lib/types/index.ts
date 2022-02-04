export interface ClientAuthenticatedPayload {
	WABrowserId: string;
	WASecretBundle: string;
	WAToken1: string;
	WAToken2: string;
}

export interface CovidCasesResponse {
	updated: number;
	countryInfo: {
		flag: string;
	};
	cases: number;
	todayCases: number;
	deaths: number;
	todayDeaths: number;
	recovered: number;
	todayRecovered: number;
	active: number;
	critical: number;
}
