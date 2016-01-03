fitBI = {}
fitBI.journal = {}

fitBI.journal.service = new breeze.DataService({
    serviceName: ('http://localhost:55338/FitBIData'),
    adapterName: 'webApi'
});

fitBI.journal.manager = new breeze.EntityManager({ dataService: fitBI.journal.service });