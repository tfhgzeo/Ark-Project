import React from "react";
import Card from "./componentes/Layout/Card";
import Primeiro from "./componentes/basicos/primeiro";
import ComParametros from "./componentes/basicos/ComParametros";
import ComFilhos from "./componentes/basicos/ComFilhos";
import "./App.css";
import Repeticao from "./componentes/basicos/Repeticao";
import Condicional from "./componentes/basicos/Condicional";
import Pai from "./componentes/comunicacao/direta/Pai";
import Super from "./componentes/comunicacao/indireta/Super";

export default (props) => (
    <div className="App">
        <Card titulo="#7 - Comunicação Indireta" color="#E19D29">
            <Super></Super>
        </Card>
        <Card titulo="#6 - Comunicação Direta" color="#29ABA4">
            <Pai sobrenome="Freitas"></Pai>
        </Card>
        <Card titulo="#5 - Condicional" color="#FA6900">
            <Condicional numero={11}></Condicional>
        </Card>
        <Card titulo="#4 - Produtos" color="#E94C6F">
            <Repeticao></Repeticao>
        </Card>
        <Card titulo="#3 - ComParametros" color="#008BBA">
            <ComParametros
                titulo="Esse é o Titulo"
                subtitulo="Esse é o Subtitulo"
            ></ComParametros>
        </Card>
        <Card titulo="#2 - ComFilhos" color="#78C0A8">
            <ComFilhos>
                <ul>
                    <li>Ana</li>
                    <li>Luiza</li>
                    <li>Carlos</li>
                    <li>Igor</li>
                    <li>Lorenzo</li>
                </ul>
            </ComFilhos>
        </Card>
        <Card titulo="#1 - Primeiro Componente" color="#FFAC00">
            <Primeiro></Primeiro>
        </Card>
    </div>
);
