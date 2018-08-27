import { Component, OnInit, ViewChild } from '@angular/core';
import { MatPaginator, MatSort, MatTableDataSource } from '@angular/material';

@Component({
  selector: 'app-client-list',
  templateUrl: './client-list.component.html',
  styleUrls: ['./client-list.component.scss']
})
export class ClientListComponent implements OnInit {
  displayedColumns = ['id', 'name', 'address', 'phone', 'edit'];
  dataSource: MatTableDataSource<Client>;

  @ViewChild(MatPaginator) paginator: MatPaginator;
  @ViewChild(MatSort) sort: MatSort;

  constructor() {
     const users: Client[] = [];
     for (let i = 1; i <= 100; i++) {
         users.push(createNewClient(i));
     }

     this.dataSource = new MatTableDataSource(users);
  }

  ngOnInit() {
    this.dataSource.paginator = this.paginator;
    this.dataSource.sort = this.sort;
  }

  applyFilter(filterValue: string) {
    filterValue = filterValue.trim(); // Remove whitespace
    filterValue = filterValue.toLowerCase(); // Datasource defaults to lowercase matches
    this.dataSource.filter = filterValue;
    if (this.dataSource.paginator) {
        this.dataSource.paginator.firstPage();
    }
}

}

export interface Client {
  id: string;
  name: string;
  address: string;
  phone: string;
}

const NAMES = [
  'Marcelo',
  'Clayton',
  'Vilson',
  'Jose',
  'Maria',
  'Antonio'
];
const ADDRESSES = [
  'Rua Jose da Silva Teste, 64, Centro',
  'Av Senador Lula da Silva, 164, Bairro Prisional',
  'Rua de Teste, 100, centro',
  'Av dos Perdidos s/n',
  'Rua Vichi Uia'
];

function createNewClient(id: number): Client {
  const name = NAMES[Math.round(Math.random() * (NAMES.length - 1))];
  const end = ADDRESSES[Math.round(Math.random() * (ADDRESSES.length - 1))];

  return {
      id: id.toString(),
      name: name,
      address : end,
      phone : '(011)98203-9988'
  };
}

