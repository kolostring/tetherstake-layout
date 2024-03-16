import Chart from "./components/Chart";

const maxValue = 10000;
const values = [
  { category: "Jun 16", value: 2510 },
  { category: "Jun 17", value: 5080 },
  { category: "Jun 18", value: 7500 },
  { category: "Jun 19", value: 3000 },
  { category: "Jun 20", value: 9500 },
  { category: "Jun 21", value: 4080 },
];
const figures = [
  { name: "Balance", value: "5.000" },
  { name: "Benefit", value: "5.000" },
  { name: "Total Benefit", value: "5.000" },
  { name: "Referal Benefit", value: "5.000" },
  { name: "Total Deposit", value: "5.000" },
  { name: "Pending Deposit", value: "5.000" },
  { name: "Total Withdraws", value: "5.000" },
  { name: "Pending Withdraws", value: "5.000" },
];

function App() {
  return (
    <div className="bg-design-light grid min-h-svh min-w-max grid-rows-[auto_1fr] px-[70px] py-[30px] dark:bg-design-black">
      <nav className="container mx-auto pb-10">
        <h1 className="text-xl font-bold uppercase text-design-white">
          Tetherstake
        </h1>
      </nav>
      <div className="container mx-auto grid grid-cols-4 grid-rows-8 gap-6">
        {figures.map((figure) => (
          <div key={figure.name} className="card grid grid-cols-[1fr_auto]">
            <h3 className="text-design-gray-dark dark:text-design-gray text-sm">{figure.name}</h3>
            <h3 className="rounded-full bg-design-green-light p-[1px_10px] text-xs font-medium text-design-black">
              USDT
            </h3>
            <h1 className="text-2xl font-bold text-design-gray-dark dark:text-design-white">
              ${figure.value}
            </h1>
          </div>
        ))}

        <section className="card col-span-2 col-start-1 row-span-4 grid grid-rows-[auto_1fr]">
          <h1 className="mb-6 text-base font-semibold text-design-gray-light">
            Profit Win
          </h1>
          <div className="text-sm">
            <Chart
              maxValue={maxValue}
              divisions={4}
              series={values}
              dataPointWidth={30}
            />
          </div>
        </section>

        <section className="card col-span-2 col-start-3 row-span-4"></section>
        <section className="card col-span-4 col-start-1 row-span-2"></section>
      </div>
    </div>
  );
}

export default App;
