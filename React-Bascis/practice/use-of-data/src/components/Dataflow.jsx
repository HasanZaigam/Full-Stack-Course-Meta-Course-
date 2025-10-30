function Dataflow() {

    function Parent() {
        const handleChildData = (data) => {
            alert("Received from child: " + data);
        };

        return <Child sendData={handleChildData} />;
    }

    function Child({ sendData }) {
        return (
            <button onClick={() => sendData("Hello Parent!")}>
                Send Data to Parent
            </button>
        );
    }

    return (
        <>
        <h2>Data Flow in React</h2>
        <Parent />
        </>
    
    );
}

export default Dataflow;