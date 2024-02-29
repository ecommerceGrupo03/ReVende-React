import { useState, useContext, useEffect } from "react";
import { AuthContext } from "../../../contexts/AuthContext";
import Categoria from "../../../models/Categoria";
import { buscar } from "../../../services/Service";
import { toastAlerta } from "../../../util/toastAlerta";
import CardCategorias from "../cardCategoria/CardCategoria";

    function ListaCategoria() {
        const [categorias, setCategorias] = useState<Categoria[]>([]);
      
        
      
        const { usuario, handleLogout } = useContext(AuthContext);
        const token = usuario.token;
      
        async function buscarCategorias() {
          try {
            await buscar("/categorias/listar", setCategorias, {
              headers: { Authorization: token },
            });
      
            // eslint-disable-next-line @typescript-eslint/no-explicit-any
          } catch (error: any) {
            if (error.toString().includes("403")) {
              toastAlerta('O token expirou, favor logar novamente', 'info')
              handleLogout();
            }
          }
        }
    
      
        useEffect(() => {
          buscarCategorias();
        }, [categorias.length]);
      
        return (
          <>
            {categorias.length === 0 ? (
              <div className="flex justify-center align-middle pt-80">
                <img src="" alt="" />
              </div>
            ) : (
              <div className="flex justify-center w-full my-4 h-full">
                <div className="container flex flex-col">
                  <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
                    {categorias.map((categoria) => (
                      <>
                        <CardCategorias key={categoria.idCategoria} categoria={categoria} />
                      </>
                    ))}
                  </div>
                </div>
              </div>
            )}
          </>
        );
      }
      
export default ListaCategoria