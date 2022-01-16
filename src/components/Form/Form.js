import {useForm} from "react-hook-form";

const Form = ({getObj}) => {
    const {register, handleSubmit} = useForm();

    return (
        <form onSubmit={handleSubmit(getObj)}>
            <label>name:<input type="text" defaultValue={''} {...register('name')}/></label>
            <label>username:<input type="text" defaultValue={''} {...register('username')}/></label>
            <label>email:<input type="text" defaultValue={''} {...register('email')}/></label>
            <button>Filter</button>
        </form>
    );
};

export default Form;
