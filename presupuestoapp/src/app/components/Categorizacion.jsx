import React, { useState, useEffect } from 'react';
import { makeStyles } from '@material-ui/core/styles';
import List from '@material-ui/core/List';
import ListItem from '@material-ui/core/ListItem';
import ListItemText from '@material-ui/core/ListItemText';
import Button from '@material-ui/core/Button';
import TextField from '@material-ui/core/TextField';

const useStyles = makeStyles({
  root: {
    display: 'flex',
    flexDirection: 'column',
    alignItems: 'center',
  },
  list: {
    width: '50%',
  },
  textField: {
    margin: '10px',
  },
});

const Categorización = () => {
  const classes = useStyles();
  const [categorias, setCategorias] = useState([]);
  const [nuevaCategoria, setNuevaCategoria] = useState('');

  useEffect(() => {
    // Obtener las categorías de la base de datos

    setCategorias([]);
  }, []);

  const handleSubmit = (e) => {
    e.preventDefault();

    // Agregar la nueva categoría a la base de datos

    setNuevaCategoria('');
  };

  return (
    <div className={classes.root}>
      <h2>Categorización de Gastos e Ingresos</h2>
      <List className={classes.list}>
        {categorias.map((categoria) => (
          <ListItem key={categoria.id}>
            <ListItemText primary={categoria.nombre} />
          </ListItem>
        ))}
      </List>
      <form className={classes.form} onSubmit={handleSubmit}>
        <TextField
          label="Nueva Categoría"
          value={nuevaCategoria}
          onChange={(e) => setNuevaCategoria(e.target.value)}
          className={classes.textField}
        />
        <Button variant="contained" color="primary" type="submit">
          Agregar Categoría
        </Button>
      </form>
    </div>
  );
};

export default Categorizacion;
