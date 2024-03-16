const Sidebar = () => {
    return (
        <div className="lg:w-1/3 mt-12 border rounded-3xl p-6">
            <div className="mb-8">
            <h2 className="text-center">Want to cook:</h2>
            <hr className="my-5 w-2/3 mx-auto"/>
            <div>
                <div className="overflow-x-auto">
                    <table className="table table-zebra">
                        {/* head */}
                        <thead>
                        <tr>
                            <th></th>
                            <th>Name</th>
                            <th>Time</th>
                            <th>Calories</th>
                        </tr>
                        </thead>
                        <tbody>
                        {/* row 1 */}
                        <tr>
                            <th>1</th>
                            <td>Cy Ganderton</td>
                            <td>30 minutes</td>
                            <td>400 calories</td>
                        </tr>
                        {/* row 2 */}
                        <tr>
                            <th>2</th>
                            <td>Hart Hagerty</td>
                            <td>30 minutes</td>
                            <td>400 calories</td>
                        </tr>
                        
                        </tbody>
                    </table>
                </div>
            </div>
            </div> 
            <div className="mb-4">
            <h2 className="text-center text-2xl font-semibold">Currently cooking:</h2>
            <hr className="my-5 w-2/3 mx-auto"/> 
            <div>
                <div className="overflow-x-auto fira-font">
                    <table className="table table-zebra">
                        {/* head */}
                        <thead>
                        <tr>
                            <th></th>
                            <th>Name</th>
                            <th>Time</th>
                            <th>Calories</th>
                        </tr>
                        </thead>
                        <tbody>
                        {/* row 1 */}
                        <tr>
                            <th>1</th>
                            <td>Cy Ganderton</td>
                            <td>30 minutes</td>
                            <td>400 calories</td>
                        </tr>
                        {/* row 2 */}
                        <tr>
                            <th>2</th>
                            <td>Hart Hagerty</td>
                            <td>30 minutes</td>
                            <td>400 calories</td>
                        </tr>
                        
                        </tbody>
                    </table>
                </div>
            </div>
            </div>
            <div className="flex justify-end gap-3">
                <p>Total Times = </p>
                <p>Total Calories = </p>
            </div>  
        </div>
    );
};

export default Sidebar;