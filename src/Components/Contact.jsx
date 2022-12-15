import { FormControl, FormGroup, InputLabel ,Input, Button,makeStyles} from '@material-ui/core'
import React from 'react'
const useStyle=makeStyles({
   formStyle:{
    width:'50%',
    margin:"auto",
    padding:20,
    paddingTop:20,
    boxShadow:"0px 0px 10px  rgba(0,0,0,0.5)"
   },
   Button:{
    marginTop:20,
    width:"50%",
    margin:"auto",
    
   }
}
)
export default function Contact() {
    const classes=useStyle();
  return (
    <div>
        <h1>Registration form</h1>
        <FormGroup className={classes.formStyle}>
            <FormControl>
                <InputLabel>FullName</InputLabel>
                 <Input type="text"/>
            </FormControl>
            <FormControl>
                <InputLabel>Phone</InputLabel>
                 <Input type="tel"/>
            </FormControl>
            <FormControl>
                <InputLabel>Email-Adress</InputLabel>
                 <Input type='email'/>
            </FormControl>
            <FormControl>
                <InputLabel>Donation-On-Behalf-Of-Person</InputLabel>
                 <Input type='text'/>
            </FormControl>
            <FormControl>
                <InputLabel>Occasion</InputLabel>
                 <Input type='text'/>
            </FormControl>
            <FormControl>
                <InputLabel>Perform-Of-Date</InputLabel>
                 <Input type='date'/>
            </FormControl>
            <FormControl>
                <InputLabel>Gotram</InputLabel>
                 <Input type='text'/>
            </FormControl>
            <FormControl>
                <InputLabel>ID-Proof(aadhar/pan card)</InputLabel>
                 <Input />
            </FormControl>
            <FormControl>
                <InputLabel>Home/Appartment</InputLabel>
                 <Input/>
            </FormControl>
            <FormControl>
                <InputLabel>Street</InputLabel>
                 <Input/>
            </FormControl>
            <FormControl>
                <InputLabel>Landmark</InputLabel>
                 <Input/>
            </FormControl>
            <FormControl>
                <InputLabel>City</InputLabel>
                 <Input/>
            </FormControl>
            <FormControl>
                <InputLabel>State</InputLabel>
                 <Input/>
            </FormControl>
            <FormControl>
                <InputLabel>Zip-Code</InputLabel>
                 <Input/>
            </FormControl>
            <br/>
            <Button variant='contained'  color='primary'className={classes.Button}>Send</Button>
        </FormGroup>
    </div>
  )
}
