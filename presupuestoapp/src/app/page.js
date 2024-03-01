import "./styles/mypage.css"
import Visualizacion from "./components/visualizacion";

export default function MyPage(){

    return(
        <div className="container-vis">
          <header className="Title">
            <h1>Presupuesto Mensual</h1>
            </header>

              <Visualizacion></Visualizacion>

        </div>
    );
}
