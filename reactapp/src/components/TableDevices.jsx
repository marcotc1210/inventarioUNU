import React from 'react'
import { TbDeviceDesktopPlus } from "react-icons/tb";

const TableDevices = () => {

  // const headers = [
  //   { label: '', isCheckbox: true },
  //   { label: 'ID' },
  //   { label: 'Tipo' },
  //   { label: 'Marca' },
  //   { label: 'Modelo' },
  //   { label: 'Serie' },
  //   { label: 'Color' },
  //   { label: 'Ubicacion' },
  //   { label: 'Estado' },
  //   { label: 'Registro' },
  //   { label: 'Estado' },
  //   { label: 'Usuario' }
  // ];

  
  // const rows = [
  //   { id: '001', tipo: 'Router', marca: 'Cisco', modelo: 'RV340', serie: 'R34012345', color: 'Negro', ubicacion: 'Centro de datos', estado: 'Nuevo', registro: '01/01/2024', estadoFinal: 'BUENO', usuario: 'Carlos' },
  //   { id: '002', tipo: 'Switch', marca: 'Netgear', modelo: 'GS308', serie: 'NG30867890', color: 'Gris', ubicacion: 'Sala de servidores', estado: 'Usado', registro: '02/02/2024', estadoFinal: 'REGULAR', usuario: 'Ana' },
  //   { id: '003', tipo: 'Laptop', marca: 'Dell', modelo: 'Latitude', serie: 'LT54321', color: 'Negro', ubicacion: 'Oficina', estado: 'Nuevo', registro: '03/03/2024', estadoFinal: 'BUENO', usuario: 'Luis' },
  //   { id: '004', tipo: 'Servidor', marca: 'HP', modelo: 'ProLiant', serie: 'HP98765', color: 'Plata', ubicacion: 'Centro de datos', estado: 'Nuevo', registro: '04/04/2024', estadoFinal: 'BUENO', usuario: 'María' },
  //   { id: '005', tipo: 'Access Point', marca: 'Ubiquiti', modelo: 'UniFi AP AC', serie: 'UA11223', color: 'Blanco', ubicacion: 'Sala de reuniones', estado: 'Usado', registro: '05/05/2024', estadoFinal: 'REGULAR', usuario: 'Jorge' },
  //   { id: '006', tipo: 'Desktop', marca: 'Lenovo', modelo: 'ThinkCentre', serie: 'TC33445', color: 'Negro', ubicacion: 'Oficina', estado: 'Reparado', registro: '06/06/2024', estadoFinal: 'BUENO', usuario: 'Sofía' },
  //   { id: '007', tipo: 'Laptop', marca: 'Apple', modelo: 'MacBook Pro', serie: 'MB55667', color: 'Gris', ubicacion: 'Laboratorio', estado: 'Nuevo', registro: '07/07/2024', estadoFinal: 'EXCELENTE', usuario: 'Andrés' },
  //   { id: '008', tipo: 'Firewall', marca: 'Fortinet', modelo: 'FortiGate 60E', serie: 'FT77889', color: 'Negro', ubicacion: 'Centro de datos', estado: 'Usado', registro: '08/08/2024', estadoFinal: 'REGULAR', usuario: 'Lucía' },
  //   { id: '009', tipo: 'Servidor', marca: 'Dell', modelo: 'PowerEdge', serie: 'PE99001', color: 'Negro', ubicacion: 'Sala de servidores', estado: 'Nuevo', registro: '09/09/2024', estadoFinal: 'BUENO', usuario: 'Miguel' },
  //   { id: '010', tipo: 'Monitor', marca: 'LG', modelo: 'UltraFine', serie: 'UF22334', color: 'Negro', ubicacion: 'Oficina', estado: 'Reparado', registro: '10/10/2024', estadoFinal: 'REGULAR', usuario: 'Carmen' }
  // ];
  
  const rows = [
    { id: '001', tipo: 'Router', estado: 'Nuevo', ubicacion: 'Centro de datos', habilitado: 'Sí', usuario: 'Carlos', fecha: '01/01/2024', masDetalles: 'Detalles...', acciones: 'Editar | Eliminar' },
    { id: '002', tipo: 'Switch', estado: 'Usado', ubicacion: 'Sala de servidores', habilitado: 'Sí', usuario: 'Ana', fecha: '02/02/2024', masDetalles: 'Detalles...', acciones: 'Editar | Eliminar' },
    { id: '003', tipo: 'Laptop', estado: 'Nuevo', ubicacion: 'Oficina', habilitado: 'Sí', usuario: 'Luis', fecha: '03/03/2024', masDetalles: 'Detalles...', acciones: 'Editar | Eliminar' },
    { id: '004', tipo: 'Servidor', estado: 'Nuevo', ubicacion: 'Centro de datos', habilitado: 'Sí', usuario: 'María', fecha: '04/04/2024', masDetalles: 'Detalles...', acciones: 'Editar | Eliminar' },
    { id: '005', tipo: 'Access Point', estado: 'Usado', ubicacion: 'Sala de reuniones', habilitado: 'Sí', usuario: 'Jorge', fecha: '05/05/2024', masDetalles: 'Detalles...', acciones: 'Editar | Eliminar' },
    { id: '006', tipo: 'Desktop', estado: 'Reparado', ubicacion: 'Oficina', habilitado: 'Sí', usuario: 'Sofía', fecha: '06/06/2024', masDetalles: 'Detalles...', acciones: 'Editar | Eliminar' },
    { id: '007', tipo: 'Laptop', estado: 'Nuevo', ubicacion: 'Laboratorio', habilitado: 'Sí', usuario: 'Andrés', fecha: '07/07/2024', masDetalles: 'Detalles...', acciones: 'Editar | Eliminar' },
    { id: '008', tipo: 'Firewall', estado: 'Usado', ubicacion: 'Centro de datos', habilitado: 'Sí', usuario: 'Lucía', fecha: '08/08/2024', masDetalles: 'Detalles...', acciones: 'Editar | Eliminar' },
    { id: '009', tipo: 'Servidor', estado: 'Nuevo', ubicacion: 'Sala de servidores', habilitado: 'Sí', usuario: 'Miguel', fecha: '09/09/2024', masDetalles: 'Detalles...', acciones: 'Editar | Eliminar' },
    { id: '010', tipo: 'Monitor', estado: 'Reparado', ubicacion: 'Oficina', habilitado: 'Sí', usuario: 'Carmen', fecha: '10/10/2024', masDetalles: 'Detalles...', acciones: 'Editar | Eliminar' }
  ];
  

  return (
    <>
      
      <div class="p-0 bg-gray-100 rounded-xl shadow-md mt-4">

        {/* Bloque superior con título, filtro y paginación */}
        <div class="pt-4 px-8 flex items-center justify-between mb-4">
          <div class="flex items-center space-x-2 hover:bg-blue-800 hover:text-white bg-gray-300 px-4 py-2 rounded-lg">
            <h2 class="text-sm font-semibold">Nuevo</h2>
            <TbDeviceDesktopPlus size={22}/>
          </div>

          <div class="flex items-center space-x-4">
            <span class="text-gray-600">Mostrar</span>
            <select class="border border-gray-300 rounded-md text-gray-600 px-2 py-1">
              <option>Columna</option>
              <option>Otra opción</option>
            </select>

            <div class="flex items-center space-x-1">
              <button class="text-gray-600">&larr;</button>
              <span class="px-2 py-1 bg-gray-200 rounded-md">1</span>
              <button class="text-gray-600">2</button>
              <span>...</span>
              <button class="text-gray-600">68</button>
              <button class="text-gray-600">&rarr;</button>
            </div>
          </div>
        </div>

        {/* Tabla */}
        <div className="overflow-x-auto">
          <table className="min-w-full bg-white rounded-lg border border-gray-200">
            <thead className="bg-gray-200 text-gray-700">
              <tr>
                {headers.map((header, index) => (
                  <th key={index} className="p-2 border-b border-gray-300">
                    {header.label}
                  </th>
                ))}
              </tr>
            </thead>
            <tbody className="text-gray-800">
              {rows.map((row, rowIndex) => (
                <tr key={rowIndex} className="hover:bg-gray-100">
                  {headers.map((header, colIndex) => (
                    <td key={colIndex} className="p-2 border-b border-gray-300 text-left">
                      {header.isCheckbox ? (
                        <input type="checkbox" />
                      ) : (
                        row[header.key] || ''
                      )}
                    </td>
                  ))}
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </div>
    </>
  )
}

export default TableDevices