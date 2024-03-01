import React, { useState, useEffect } from 'react';
import { makeStyles } from '@material-ui/core/styles';
import Paper from '@material-ui/core/Paper';
import Typography from '@material-ui/core/Typography';
import Chart from 'chart.js';

const useStyles = makeStyles({
  root: {
    display: 'flex',
    flexDirection: 'column',
    alignItems: 'center',
  },
  paper: {
    width: '50%',
    padding: '20px',
  },
  chart: {
    width: '400px',
    height: '400px',
  },
});

const Visualización = () => {
  const classes = useStyles();
  const [gastos, setGastos] = useState([]);
  const [ingresos, setIngresos] = useState([]);

  useEffect(() => {
    // Obtener los datos de la base de datos

    setGastos([]);
    setIngresos([]);
  }, []);

  useEffect(() => {
    // Crear el gráfico
    const ctx = document.getElementById('chart').getContext('2d');
    const chart = new Chart(ctx, {
      type: 'line',
      data: {
        labels: ['Enero', 'Febrero', 'Marzo', 'Abril', 'Mayo', 'Junio', 'Julio', 'Agosto', 'Septiembre', 'Octubre', 'Noviembre', 'Diciembre'],
        datasets: [
          {
            label: 'Gastos',
            data: gastos,
            borderColor: 'red',
          },
          {
            label: 'Ingresos',
            data: ingresos,
            borderColor: 'green',
          },
        ],
      },
    });
  }, [gastos, ingresos]);

  return (
    <div className={classes.root}>
      <h2>Visualización de Gastos e Ingresos</h2>
      <Paper className={classes.paper}>
        <Typography variant="h6">Resumen Mensual</Typography>
        <div>
          <p>Total de Gastos: </p>
          <p>Total de Ingresos: </p>
          <p>Saldo Neto: </p>
        </div>
        <div className={classes.chart}>
          <canvas id="chart"></canvas>
        </div>
      </Paper>
    </div>
  );
};

export default Visualizacion;
