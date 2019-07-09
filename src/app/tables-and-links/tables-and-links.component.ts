import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-tables-and-links',
  templateUrl: './tables-and-links.component.html',
  styleUrls: ['./tables-and-links.component.sass']
})
export class TablesAndLinksComponent implements OnInit {

  public tr_daily: any;
  public tr_dailytaskDetails: any;
  public testers = [{
    roleName: 'Tester',
    roleId: 'role1',
    collapsed: true,
    children: [
      { roleName: 'Manual Tester', roleId: 'role11', collapsed: true, children: [] },
      {
        roleName: 'Automation Tester',
        roleId: 'role12',
        collapsed: true,
        children: [{
          roleName: 'Web Testing',
          roleId: 'role121',
          collapsed: true,
          children: [
            { roleName: 'Desktop', roleId: 'role1211', children: [] },
            { roleName: 'Mobile', roleId: 'role1212', children: [] }
          ]
        }]
      }
    ],
    selected: 'selected'
  },

  {
    roleName: 'QA Manager',
    roleId: 'role2',
    collapsed: true,
    children: [
      { roleName: 'Agile Testing', roleId: 'role11', collapsed: true, children: [] },
      {
        roleName: ' Modern Testing',
        roleId: 'role12',
        collapsed: true,
        children: [{
          roleName: 'Web Product',
          roleId: 'role121',
          collapsed: true,
          children: [
            { roleName: 'Desktop Models', roleId: 'role1211', children: [] },
            { roleName: 'Mobile Models', roleId: 'role1212', children: [] }
          ]
        }]
      }
    ]
  },

  {
    roleName: 'Manager',
    roleId: 'role3',
    collapsed: true,
    children: [
      { roleName: 'Agile Manager', roleId: 'role11', children: [] },
      {
        roleName: 'QA Manager',
        roleId: 'role12',
        collapsed: true,
        children: [{
          roleName: 'Web QA Manager',
          roleId: 'role121',
          collapsed: true,
          children: [
            { roleName: 'Desktop QA Manager', roleId: 'role1211', children: [] },
            { roleName: 'Mobile QA Manager', roleId: 'role1212', children: [] }
          ]
        }]
      }
    ]
  }
  ];

  public transport = [

    {
      roleName: 'Motorised Vehicles',
      roleId: 'role1',
      collapsed: true,
      children: [{
        roleName: ' Cars',
        roleId: 'role11',
        collapsed: true,
        children: [
          { roleName: 'Coupe', roleId: 'role1211', children: [] },
          { roleName: 'Sedan', roleId: 'role1212', children: [] }
        ]
      },
      {
        roleName: 'Bikes',
        roleId: 'role12',
        collapsed: true,
        children: [
          { roleName: 'Commuter', roleId: 'role1211', children: [] },
          { roleName: 'Cruiser', roleId: 'role1212', children: [] },
          { roleName: 'Superbikes', roleId: 'role1211', children: [] },
          { roleName: 'Sports Bikes', roleId: 'role1212', children: [] }
        ]
      }
      ],
      selected: 'selected'
    },

    {
      roleName: 'Non Motorised',
      roleId: 'role2',
      collapsed: true,
      children: [
        { roleName: 'Cart', roleId: 'role11', collapsed: true, children: [] },
        { roleName: 'Animals', roleId: 'role12', collapsed: true, children: [] }
      ]
    }
  ];

  public foods = [{
    roleName: 'Cereals',
    roleId: 'role1',
    collapsed: true,
    children: [
      { roleName: ' Rice', roleId: 'role11', collapsed: true, children: [] },
      { roleName: 'Wheat', roleId: 'role1211', children: [] },
      { roleName: 'Ragi', roleId: 'role1212', children: [] },
      {
        roleName: 'Non Vegetarian',
        roleId: 'role12',
        collapsed: true,
        children: [{
          roleName: 'Red Meat',
          roleId: 'role12',
          collapsed: true,
          children: [
            { roleName: 'Beef', roleId: 'role1211', children: [] },
            { roleName: 'Goat', roleId: 'role1212', children: [] },
            { roleName: 'Lamb', roleId: 'role1211', children: [] }
          ]
        },
        {
          roleName: 'Poultry',
          roleId: 'role12',
          collapsed: true,
          children: [
            { roleName: 'Chicken', roleId: 'role1211', children: [] },
            { roleName: 'Duck', roleId: 'role1212', children: [] },
            { roleName: 'Quail', roleId: 'role1211', children: [] }
          ]
        },
        { roleName: 'Pork', roleId: 'role12', collapsed: true, children: [] },
        {
          roleName: 'Seafood',
          roleId: 'role12',
          collapsed: true,
          children: [
            { roleName: 'Fish', roleId: 'role1211', children: [] },
            { roleName: 'Octopus', roleId: 'role1212', children: [] },
            { roleName: 'Squid', roleId: 'role1211', children: [] }
          ]
        }
        ]
      }
    ],
    selected: 'selected'
  },
  {
    roleName: 'Vegetarian',
    roleId: 'role12',
    collapsed: true,
    children: [{
      roleName: 'Leafy Vegetables',
      roleId: 'role12',
      collapsed: true,
      children: [
        { roleName: 'Lettuce', roleId: 'role1211', children: [] },
        { roleName: 'Spinach', roleId: 'role1212', children: [] }
      ]
    },
    {
      roleName: 'Cruciferous',
      roleId: 'role12',
      collapsed: true,
      children: [
        { roleName: 'Cabbage', roleId: 'role1211', children: [] },
        { roleName: 'Broccolli', roleId: 'role1212', children: [] },
        { roleName: 'CauliFlower', roleId: 'role1211', children: [] }
      ]
    },
    {
      roleName: 'Marrow',
      roleId: 'role12',
      collapsed: true,
      children: [
        { roleName: 'Pumpkin', roleId: 'role12', collapsed: true, children: [] },
        { roleName: 'Cucumber', roleId: 'role1211', children: [] }
      ]
    },
    {
      roleName: 'Root vegetables',
      roleId: 'role12',
      collapsed: true,
      children: [
        { roleName: 'Potato', roleId: 'role12', collapsed: true, children: [] },
        { roleName: 'Yam', roleId: 'role1211', children: [] }
      ]
    },
    {
      roleName: 'Edible stem',
      roleId: 'role12',
      collapsed: true,
      children: [
        { roleName: 'Celery', roleId: 'role12', collapsed: true, children: [] },
        { roleName: 'Asparagus', roleId: 'role1211', children: [] }
      ]
    },
    {
      roleName: 'Allium',
      roleId: 'role12',
      collapsed: true,
      children: [
        { roleName: 'Onion', roleId: 'role12', collapsed: true, children: [] },
        { roleName: 'Garlic', roleId: 'role1211', children: [] }, { roleName: 'Shallot', roleId: 'role1211', children: [] }
      ]
    }
    ]
  },

  {
    roleName: 'Non Motorised',
    roleId: 'role2',
    collapsed: true,
    children: [
      { roleName: 'Cart', roleId: 'role11', collapsed: true, children: [] },
      { roleName: 'Animals', roleId: 'role12', collapsed: true, children: [] }
    ]
  }
  ];
  public roleList = Object.assign([], this.testers);
  public selected_tree = JSON.stringify(this.testers);
  public currentNode = this.roleList[0];
  public change_tree(selected_tree) {
    this.roleList = JSON.parse(selected_tree);
    this.currentNode = this.roleList[0];
  }
  constructor() { }

  ngOnInit() {
    this.tr_dailyinit();
  }
  public tr_dailyinit() {
    this.tr_daily = {};
    // tslint:disable-next-line: object-literal-key-quotes
    this.tr_dailytaskDetails = [{ 'name': 'testt', 'date': 'May 23, 2019', 'time': '08:33 AM', 'category': '1', 'description': 'asdasda' }];
  }

}
