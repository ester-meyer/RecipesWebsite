import { useForm } from "react-hook-form";
import { useDispatch } from "react-redux";
import { useNavigate } from "react-router-dom";
import { createUser } from "../Store/UserSlice";

function useFormControler() {


    const { register, handleSubmit, formState: { errors } } = useForm({
        defaultValues: {
            name: '',
            email: '',
            password: '',
        },
    })

    const navigate = useNavigate()
    const dispatch = useDispatch()

    const onSubmit = (data) => {
        dispatch(createUser(data));
        navigate('/RecipeList');
    };
    return {
        register,
        handleSubmit,
        errors,
        onSubmit,
    }
}

export default useFormControler;