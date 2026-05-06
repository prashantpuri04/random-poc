export const UserProfile = (props: any) => {
    return (
        <div className="m-4 p-4 w-[250px] rounded-lg bg-gray-100">
            <p>Name: {props.name}</p>
            <p>username: {props.username}</p>  
        </div>
    )
}