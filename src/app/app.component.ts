import { Component, ViewEncapsulation, Inject, ViewChild } from '@angular/core';
import { SidebarComponent } from '@syncfusion/ej2-angular-navigations';
import { MenuItemModel } from '@syncfusion/ej2-navigations';


@Component({
    selector: 'app-root',
    styleUrls: ['app.component.css'],
    templateUrl: 'app.component.html',
    encapsulation: ViewEncapsulation.None
})
export class AppComponent {
  title = 'pruebacrm';
    @ViewChild('sidebarMenuInstance')
    public sidebarMenuInstance: SidebarComponent;
    public width: string = '130px';
    public mediaQuery: string = ('(min-width: 600px)');
    public target: string = '.main-content';
    public dockSize: string = '0px';
     public enableDock: boolean = true;
    constructor() {
        
    }
    public menuItems: MenuItemModel[] = [
        {
            text: 'Clientes',
            iconCss: 'icon-clientes ico'
        },
        {
            text: 'Contactos',
            iconCss: 'icon-contactos ico'
        },
        {
            text: 'Clientes potenciales',
            iconCss: 'icon-clientespot ico'
        },
        {
            text: 'Oportunidades',
            iconCss: 'icon-oportunidades ico'
        },
        {
            text: 'Tareas',
            iconCss: 'icon-tareas ico'
        },
        {
            text: 'Email',
            iconCss: 'icon-email ico'
        },
        {
            text: 'Informes',
            iconCss: 'icon-informes ico'
        },
        {
            text: 'Calendario',
            iconCss: 'icon-calendario ico'
        },
        {
            text: 'Portfolio',
            iconCss: 'icon-portfolio ico'
        },
        {
            text: 'Campañas',
            iconCss: 'icon-campanias ico'
        },
        {
            text: 'Tickets',
            iconCss: 'icon-tickets ico'
        }
    ];
     public AccountMenuItem: MenuItemModel[] = [
        {
            iconCss: 'imagen',
            items: [
                { text: 'Configuración' },
                { text: 'Cerrar sesión' },
            ]
        }
    ];
    // open new tab
    newTabClick(): void {
        let URL = location.href.replace(location.search,'');
        document.getElementById('newTab').setAttribute('href', URL.split('#')[0] + 'sidebar/sidebar-menu');
    }

    openClick() {
        this.sidebarMenuInstance.toggle();
    }
};
// open new tab
