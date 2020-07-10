import { Component, OnInit } from '@angular/core';
import { ITreeNode } from './tree-node';
import { GridApi, ColDef, GridReadyEvent, RowClickedEvent } from 'ag-grid-community';
import { ClientSideRowModelModule } from '@ag-grid-community/client-side-row-model';
@Component({
    selector: 'tree-data',
    templateUrl: 'tree-data.component.html',
    styleUrls: ['tree-data.component.scss']
})

export class TreeDataComponent implements OnInit {
    treeRowData = [
        { id: 'Folder1', title: 'Folder 1', itemPath: ['Folder1'] },
        { id: 'Subfolder for Folder1', title: 'Subfolder of Folder 1', parentId: 'Folder1', itemPath: ['Folder1', 'Subfolder for Folder1'] },
        { id: '111', title: '2014', parentId: 'Subfolder for Folder1', itemPath: ['Folder1', 'Subfolder for Folder1', '2014'] },
        { id: '1111', title: 'Subfolder of 2014', parentId: '111', itemPath: ['Folder1', 'Subfolder for Folder1', '2014', 'Subfolder of 2014'] },

        { id: '112', title: '2015', parentId: 'Subfolder for Folder1', itemPath: ['Folder1', 'Subfolder for Folder1', '2015']},
        { id: '113', title: '2016', parentId: 'Subfolder for Folder1', itemPath: ['Folder1', 'Subfolder for Folder1', '2016'] },
        { id: '114', title: '2017', parentId: 'Subfolder for Folder1', itemPath: ['Folder1', 'Subfolder for Folder1', '2017'] },
        { id: '115', title: '2018', parentId: 'Subfolder for Folder1', itemPath: ['Folder1', 'Subfolder for Folder1', '2018'] },
        { id: '1151', title: 'Q1', parentId: '115', itemPath: ['Folder1', 'Subfolder for Folder1', '2018', 'Q1'] },
        { id: '1152', title: 'Q2', parentId: '115', itemPath: ['Folder1', 'Subfolder for Folder1', '2018', 'Q2'] },
        { id: '1153', title: 'Q3', parentId: '115', itemPath: ['Folder1', 'Subfolder for Folder1', '2018', 'Q3'] },
        { id: '1154', title: 'Q4', parentId: '115', itemPath: ['Folder1', 'Subfolder for Folder1', '2018', 'Q4'] },
        { id: '116', title: '2018', parentId: 'Subfolder for Folder1', itemPath: ['Folder1', 'Subfolder for Folder1', '2018'] },

        { id: '12', title: 'Staff', parentId: 'Folder1', itemPath: ['Folder1', 'Staff'] },
        { id: '13', title: 'Submissions', parentId: 'Folder1', itemPath: ['Folder1', 'Submissions'] },

        { id: '300', title: 'Folder 3', itemPath: ['Folder3'] },
        { id: '400', title: 'Folder 4', itemPath: ['Folder4'] },
        { id: '500', title: 'Folder 5', itemPath: ['Folder5'] },
        { id: '600', title: 'Folder 6', itemPath: ['Folder6'] },
        { id: '700', title: 'Folder 7', itemPath: ['Folder7'] },
        { id: '7001', title: 'Other', parentId: 'Folder7', itemPath: ['Folder7', 'New Folder'] }
      ];

    gridApi: GridApi;
    modules = [ClientSideRowModelModule];

    columnDefs: ColDef[] = [];

    defaultColDef = { flex: 1 };
    autoGroupColumnDef: ColDef = {
        headerName: "Folders",
        minWidth: 300,
        cellRendererParams: {
          suppressCount: true
        },
      };

    getRowNodeId = (data: ITreeNode) => String(data.id);
    getDataPath = (data: ITreeNode) => data.itemPath;

    constructor() { }

    ngOnInit() { }

    onGridReady(event: GridReadyEvent): void {
      this.gridApi = event.api;
    }

    onRowClicked(event: RowClickedEvent): void {
    }
}
