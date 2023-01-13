import React from 'react';
import { useDispatch, useSelector, useStore} from 'react-redux';
import { useForm } from 'react-hook-form';
import { chooseName, chooseMake, chooseAged, choosePrice} from '../../Redux/Slices/RootSlice';
import { Input } from '../SharedComponents/Input';
import { Button } from '@material-ui/core';
import { server_calls } from '../../Api';


interface DrinkFormProps {
    id?: string;
    data?: {}
};

interface DrinkState {
    name: string;
    make: string;
    price: string;
    aged: string;
}


export const DrinkForm = (props:DrinkFormProps) => {

  const dispatch = useDispatch();
  const store = useStore();
  const name = useSelector<DrinkState>(state => state.name);
  const { register, handleSubmit } = useForm({ });

  const onSubmit = (data:any, event:any) => {
    console.log(props.id)
    if(props.id!){
      server_calls.update(props.id!, data)
      console.log(`Updated: ${data} ${props.id}`);
      console.log(data);
      setTimeout( () => {window.location.reload()}, 1000);
      event.target.reset();
    } else {
      dispatch(chooseName(data.name));
      dispatch(chooseMake(data.make));
      dispatch(choosePrice(data.price));
      dispatch(chooseAged(data.aged));
      server_calls.create(store.getState());
      setTimeout( () => {window.location.reload()}, 1000)
    }
  }

  return (
    <div>
        <form onSubmit={handleSubmit(onSubmit)}>
          <div>
              <label htmlFor="name">Tequila Name</label>
              <Input {...register("name")} name="name" placeholder='Name' />
          </div>
          <div>
              <label htmlFor="make">Make</label>
              <Input {...register("make")} name="make" placeholder='Make' />
          </div>
          <div>
              <label htmlFor="price">Price</label>
              <Input {...register("price")} name="price" placeholder='Price' />
          </div>
          <div>
              <label htmlFor="aged">Aged</label>
              <Input {...register("aged")} name="aged" placeholder='Aged' />
          </div>
          <Button type="submit">Submit</Button>
        </form>
    </div>
  )
}