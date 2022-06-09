import { hours } from "../data";

export default function CreateForm({ formHandler }) {
    function getHourlyCustomerCount(min, max) {
        min = Math.ceil(min);
        max = Math.floor(max);
        return Math.floor(Math.random() * (max - min) + min);
    }

    function handleSubmit(event) {
        event.preventDefault();
        let location_data = {};
        location_data.city = event.target.Location.value;
        location_data.min_cust = event.target.MinimumCustomersPerHour.value;
        location_data.max_cust = event.target.MaximumCustomersPerHour.value;
        location_data.avg_sales = event.target.AverageCookiesPerSale.value;
        location_data.values = {};
        let total_sales = 0;
        hours.map(hour => {
            let customers = getHourlyCustomerCount(location_data.min_cust, location_data.max_cust);
            location_data.values[hour] = customers * location_data.avg_sales;
            total_sales += location_data.values[hour];
        });
        location_data.total = total_sales;
        formHandler(location_data);
        event.target.reset();
    }

    return (
        <form onSubmit={handleSubmit} className="w-full max-w-screen-lg p-3 px-5 my-10 rounded-md bg-emerald-300">
            <h1 className="text-2xl font-medium text-center">Create Cookie Stand</h1>
            <div className="flex flex-wrap">
                <div className="w-full px-3 mb-5">
                    <label className="text-sm font-bold tracking-wide text-gray-700">Location</label>
                    <input className="w-full px-4 py-3 text-gray-700 placeholder-black rounded bg-gray-50 h-1/2" id="Location" type="string" required={true} />
                </div>
            </div>

            <div className="flex flex-wrap w-full mb-3">
                <div className="w-full px-3 mb-6 md:w-1/4 md:mb-0">
                    <label className="text-sm font-bold tracking-wide text-gray-700">Minimum Customers Per Hour</label>
                    <input className="w-full px-4 py-3 text-gray-700 placeholder-black rounded bg-gray-50 h-1/2" id="MinimumCustomersPerHour" type="text" required={true} />
                </div>

                <div className="flex flex-wrap w-full mb-3">
                    <div className="w-full px-3 mb-6 md:w-1/4 md:mb-0">
                        <label className="text-sm font-bold tracking-wide text-gray-700">Maximum Customers Per Hour</label>
                        <input className="w-full px-4 py-3 text-gray-700 placeholder-black rounded bg-gray-50 h-1/2" id="MaximumCustomersPerHour" type="text" required={true} />
                    </div>

                    <div className="flex flex-wrap w-full mb-3">
                        <div className="w-full px-3 mb-6 md:w-1/4 md:mb-0">
                            <label className="text-sm font-bold tracking-wide text-gray-700">Average Cookies Per Sale</label>
                            <input className="w-full px-4 py-3 text-gray-700 placeholder-black rounded bg-gray-50 h-1/2" id="AverageCookiesPerSale" type="float" required={true} />
                        </div>

                        <div className="flex flex-wrap w-full mb-3"></div>
                        <button type="submit" className="block w-full h-full font-bold text-gray-700 rounded-md bg-emerald-500 ">
                            Create
                        </button>
                    </div>
                </div>
            </div>
        </form>
    )
}