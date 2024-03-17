const Sidebar = ({wantToCook, handleCurrentCooking, cooking ,handleCooking, times, calories}) => {
    
    return (
        <div className="lg:w-1/3 mt-12 border rounded-3xl p-2 lg:p-5">
            <div className="mb-8">
                <h2 className="text-center text-2xl font-semibold">Want to cook: {wantToCook.length}</h2>
                <hr className="my-5 w-2/3 mx-auto"/>
                <div className="overflow-auto fira-font font-medium">
                        <table className="table table-zebra">
                            <thead>
                            <tr>
                                <th></th>
                                <th>Name</th>
                                <th>Time</th>
                                <th>Calories</th>
                                <th></th>
                            </tr>
                            </thead>
                        </table>
                    </div>
                {
                    wantToCook.map((cook, idx) => (
                        <div className="fira-font font-medium">
                            <div className="overflow-auto flex justify-between"> 
                                <table className="table">
                                    <thead>
                                        <tr>
                                            <th>{idx+parseInt(1)}</th>
                                            <td className="text-wrap">{cook.recipe_name}</td>
                                            <td><span>{cook.preparing_time}</span> <br />minutes</td>
                                            <td><span>{cook.calories}</span> <br />calories</td>
                                        </tr>
                                    </thead>
                                </table>
                                <button onClick={() => {handleCurrentCooking(cook.recipe_id);
                                handleCooking(cook)}} className="btn bg-[#0BE58A] border-0 px-3 text-sm text-black rounded-full">Preparing</button>
                            </div>
                        </div>
                    ))
                }
            </div> 
            <div className="mb-4">
                <h2 className="text-center text-2xl font-semibold">Currently cooking: {cooking.length}</h2>
                <hr className="my-5 w-2/3 mx-auto"/> 
                <div>
                    <div className="overflow-x-auto fira-font">
                        <table className="table table-zebra">
                            <thead>
                            <tr>
                                <th></th>
                                <th>Name</th>
                                <th>Time</th>
                                <th>Calories</th>
                                <th></th>
                            </tr>
                            </thead>
                        </table>
                    </div>
                    {
                        cooking.map((item, idx) => (
                            <div className="fira-font font-medium">
                                <div className="flex justify-between"> 
                                    <table className="table">
                                        <thead>
                                            <tr>
                                                <th>{idx+1}</th>
                                                <td className="text-wrap">{item.recipe_name}</td>
                                                <td><span>{item.preparing_time}</span> <br />minutes</td>
                                                <td><span>{item.calories}</span> <br />calories</td>
                                            </tr>
                                        </thead>
                                    </table> 
                                </div>
                            </div> 
                        ))
                    }
                </div>
            </div>
            <div className="flex justify-end gap-3">
                <p>Total Times = {times}</p>
                <p>Total Calories = {calories}</p>
            </div>  
        </div>
    );
};

export default Sidebar;