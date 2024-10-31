export default function SliderCards({titulo, children}) {
    return(
        <>
        <div>
            <h1 className="text-2xl font-bold">{titulo}</h1>
            <div className="flex w-full flex-wrap">
                {children}
            </div>
        </div>
     
        </>
    )
}