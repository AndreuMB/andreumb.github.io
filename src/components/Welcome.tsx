import './Welcome.css';

function Welcome() {
    return (
        <div className="absolute w-full h-full text-secondary top-0 left-0 flex items-center justify-center -z-20 text-center flex-col gap-2">
            <h1>Hi! Im Andreu</h1><p className=""> a non <span className="moving-word">still</span> developer</p>
        </div>
    );
}

export default Welcome;
