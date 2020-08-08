import React, {useState, useEffect} from 'react';
import { Link } from 'react-router-dom'; 
import PageDefault from '../../../components/PageDefault';
import FormField from '../../../components/FormField';
import Button from '../../../components/Button';

function CadastroCategoria() {
    //teste
    const valoresIniciais = {
        nome: '',
        descricao: '',
        cor: '#000'
    }

    const [categorias, setCategorias] = useState([]);
    const [values, setValues] = useState(valoresIniciais);   

    function setValue(chave, valor) {

        setValues({
            ...values,
            [chave]: valor
        })
    }

    function handleChange(infosDoEvento) {
        //debugger;
        setValue(
            infosDoEvento.target.getAttribute('name'),
            infosDoEvento.target.value
        );
    }

    useEffect(() => {

      let URL = "https://aluraflix-tenoken3.herokuapp.com";

      if(window.location.href.includes('localhost')) 
        URL = 'http://localhost:8080/categorias'; 

        fetch(URL)
         .then(async (respostaDoServer) =>{
          if(respostaDoServer.ok) {
            const resposta = await respostaDoServer.json();
            setCategorias(resposta);
            return; 
          }
          throw new Error('Não foi possível pegar os dados');
         })
 
    }, []);

    return(
        <PageDefault>
        <h1>Cadastro de Categoria: {values.nome}</h1>
  
        <form onSubmit={ function handleSubmit(event){
            event.preventDefault();
            setCategorias([
                ...categorias,
                values
            ]);

            setValues(valoresIniciais)
        }}>
  
        <FormField
          label="Nome da Categoria"
          type="text"
          name="nome"
          value={values.nome}
          onChange={handleChange}
        />

        <FormField
          label="Descrição:"
          type="textarea"
          name="descricao"
          value={values.descricao}
          onChange={handleChange}
        />
        {/* <div>
          <label>
            Descrição:
            <textarea
              type="text"
              value={values.descricao}
              name="descricao"
              onChange={handleChange}
            />
          </label>
        </div> */}

        <FormField
          label="Cor"
          type="color"
          name="cor"
          value={values.cor}
          onChange={handleChange}
        />
        {/* <div>
          <label>
            Cor:
            <input
              type="color"
              value={values.cor}
              name="cor"
              onChange={handleChange}
            />
          </label>
        </div> */}
  
          <Button>
            Cadastrar
          </Button>
        </form>

        {categorias.length === 0 && (
          <div>
            Loading...
          </div>
        )}
  
        <ul>
            {categorias.map((categoria) => {
                return(
                    <li key={`${categoria.titulo}`}>
                        {categoria.titulo}
                    </li>
                )
            })}
        </ul>
  
        <Link to="/">
          Ir para home
        </Link>
      </PageDefault>
    )
}

export default CadastroCategoria;