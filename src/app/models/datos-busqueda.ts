export class ConfiguracionBusquedas {
    public static versiones = [
        {
            version: 3.3
        }, {
            version: 3.2
        }
    ];


    public static estatusFactura = [
        {
            status: 'Todos',
            value: -1
        },
        {
            status: 'Activo',
            value: 1
        },
        {
            status: 'Cancelado',
            value: 0
        }
    ]

    public static inputData = [
        {
            label: '* RFC Emisor',
            placeholder: 'Ingrese RFC Emisor',
            icon: '',
            controlName: 'rfc',
            size: '12'
        },
        {
            label: 'Folio Fiscal',
            placeholder: 'Ingrese Folio Fiscal',
            icon: '',
            controlName: 'folioFiscal',
            size: '12'
        },
        {
            label: 'Folio',
            placeholder: 'Ingrese Folio',
            icon: '',
            controlName: 'folio',
            size: '12'
        },
        {
            label: 'Serie',
            placeholder: 'Ingrese Serie',
            icon: '',
            controlName: 'serie',
            size: '12'
        }
    ]
}