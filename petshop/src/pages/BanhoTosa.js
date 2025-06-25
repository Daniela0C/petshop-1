import ContentImgLeft from "../components/ContentImgLeft"
import Rotulo from "../components/Rotulo"
import imagem01 from "../imagens/imagens-banho-e-tosa/banho-tosa.jpg";


function BanhoTosa(){
    return(
        <div>
            <Rotulo rotulo='Banho e Tosa'/>
            <ContentImgLeft imagem={imagem01}/>
        </div>
    )
}

export default BanhoTosa