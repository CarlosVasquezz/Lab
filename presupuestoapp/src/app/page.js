import React, { useState, useEffect } from 'react';
import { makeStyles } from '@material-ui/core/styles';
import Paper from '@material-ui/core/Paper';
import Typography from '@material-ui/core/Typography';
import Registro from './components/Registro';
import Categorización from './components/Categorización';
import Visualización from './components/Visualización';

const useStyles = makeStyles({
  root: {
    display: 'flex',
    flexDirection: 'column',
    alignItems: 'center',
  },
  paper: {
    width: '80%',
    padding: '20px',
    margin: '20px',
  },
});
const App = () => {
  const classes = useStyles();
  const [gastos, setGastos] = useState([]);
  const [ingresos, setIngresos] = useState([]);
  const [categorias, setCategorias] = useState([]);

  useEffect(() => {
    // Obtener datos de la base de datos (gastos, ingresos, categorías)

    setGastos([]);
    setIngresos([]);
    setCategorias([]);
  }, []);

  return (
    <div className={classes.root}>
      <Paper className={classes.paper}>
        <Typography variant="h4">Finanzas Personales</Typography>
        <Registro
          gastos={gastos}
          setGastos={setGastos}
          ingresos={ingresos}
          setIngresos={setIngresos}
          categorias={categorias}
        />
        <Categorización categorias={categorias} setCategorias={setCategorias} />
        <Visualización gastos={gastos} ingresos={ingresos} />
      </Paper>
    </div>
  );
};

export default App;

