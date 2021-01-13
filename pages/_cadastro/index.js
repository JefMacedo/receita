import {useState} from 'react';
import Head from 'next/head';
import {
    Button,
    TextField,
    Grid,
    Paper,
    List,
    ListItem,
    ListItemText,
    ListItemSecondaryAction,
    IconButton
} from '@material-ui/core';


export default function Cadastro(){
    const [img, setImg] = useState('');

    return(
        <div>
            <Head>
                <title>Cadastro de Receita</title>
                <link rel="stylesheet" href="https://fonts.googleapis.com/css?family=Roboto:300,400,500,700&display=swap" />
            </Head>
            
            <h1>Cadastro de Receita </h1>

            <Paper style={{margin: '24px auto', maxWidth:'800px', padding:'12px'}}>
                <Grid container>
                    <Grid item container justify={'center'}>
                        <img width={250} src={img} />
                    </Grid>
                    <Grid item xs={12}>
                        <TextField label="Imagem" value={img} onChange={event => setImg(event.target.value)} fullWidth />
                    </Grid>
                </Grid>
            </Paper>
        </div>
    )
}