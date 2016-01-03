/// <reference path="../lib/breeze-client/breeze.debug.js" />
/// <reference path="../lib/ag-grid/dist/ag-grid.js" />
/// <reference path="../lib/ag-grid/dist/ag-grid.min.js" />
/// <reference path="../lib/d3/d3.js" />
/// <reference path="../lib/d3/d3.min.js" />
/// <reference path="../lib/underscore/underscore.js" />


fitBI.journal.weight = function (pSettings) {
    var settings = {}

    var journal = function () {

    }
    


    var displayData = function () {
        return [
    { make: "Toyota", model: "Celica", price: 35000 },
    { make: "Ford", model: "Mondeo", price: 32000 },
    { make: "Porsche", model: "Boxster", price: 72000 }
        ];
    }
   
    journal.renderInitial = function () {
        var grid = document.querySelector("#" + settings.DivID);

        var grid = document.querySelector("#" + settings.DivID);
        journal.retrieveData();
        return journal;
    }
    
    journal.retrieveData = function () {
        var manager = fitBI.journal.manager;
        var query = new breeze.EntityQuery()
            .from("Active");

        manager.executeQuery(query).then(function (data) {
            journal.renderData();
        }).fail(function (e) {
            alert(e);
        });
    }

    journal.renderData = function () {
        //agGridGlobalFunc("#" + settings.DivID, gridOptions);
        //grid.setGridOptions(gridOptions);        document.addEventListener("DOMContentLoaded", function () {
            var grid = document.querySelector("#" + settings.DivID);
            if (grid.setGridOptions) {
                grid.setGridOptions(gridOptions);
            }
        });
        return journal;
    }
    //#region Settings
    journal.settings = function (value) {
        if (!value) { return settings };
        _.each(d3.keys(value),
            function(key){
                settings[key] = value[key];
            })
    }

    journal.settings(pSettings);
    if (!settings.DivID) settings.DivID = "grid";

    settings.columnDefs = [
        { headerName: "Make", field: "make" },
        { headerName: "Model", field: "model" },
        { headerName: "Price", field: "price" }
    ];    var gridOptions = {
        columnDefs: settings.columnDefs,
        rowData: displayData()
    };

    //#endregion
    return journal;
}