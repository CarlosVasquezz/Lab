import React, { useState } from 'react';
import { makeStyles } from '@material-ui/core/styles';
import TextField from '@material-ui/core/TextField';
import Button from '@material-ui/core/Button';
import Select from '@material-ui/core/Select';
import MenuItem from '@material-ui/core/MenuItem';

const useStyles = makeStyles({
  root: {
    display: 'flex',
    flexDirection: 'column',
    alignItems: 'center',
  },
  form: {
    width: '50%',
  },
  textField: {
    margin: '10px',
  },
  select: {
    margin: '10px',
  },
});

const Registro = () => {
  const classes = useStyles();
  const [cantidad, setCantidad] = useState('');
  const [fecha, setFecha] = useState('');
  const [descripcion, setDescripcion] = useState('');
  const [categoria, setCategoria] = useState('');

  const handleSubmit = (e) => {
    e.preventDefault();

    // Registrar la información en la base de datos

    setCantidad('');
    setFecha('');
    setDescripcion('');
    setCategoria('');
  };

  return (
    <div className={classes.root}>
      <h2>Registro de Gastos e Ingresos</h2>
      <form className={classes.form} onSubmit={handleSubmit}>
        <TextField
          label="Cantidad"
          type="number"
          value={cantidad}
          onChange={(e) => setCantidad(e.target.value)}
          className={classes.textField}
        />
        <TextField
          label="Fecha"
          type="date"
          value={fecha}
          onChange={(e) => setFecha(e.target.value)}
          className={classes.textField}
        />
        <TextField
          label="Descripción"
          value={descripcion}
          onChange={(e) => setDescripcion(e.target.value)}
          className={classes.textField}
        />
        <Select
          label="Categoría"
          value={categoria}
          onChange={(e) => setCategoria(e.target.value)}
          className={classes.select}
        >
          <MenuItem value="">Sin categoría</MenuItem>
          <MenuItem value="Alimentación">Alimentación</MenuItem>
          <MenuItem value="Transporte">Transporte</MenuItem>
          <MenuItem value="Entretenimiento">Entretenimiento</MenuItem>
          <MenuItem value="Otros">Otros</MenuItem>
        </Select>
        <Button variant="contained" color="primary" type="submit">
          Registrar
        </Button>
      </form>
    </div>
  );
};

export default Registro;
