import Clipboard from "./Icons/Clipboard";
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
const referralLink = "HUKJ8IJ-LI";
const referrals = [
  { account: "0x50E4...5e05", date: "10/3/2024", benefit: "1.5 USDT" },
  { account: "0x48E6...6e85", date: "09/3/2024", benefit: "1.5 USDT" },
];

function App() {
  return (
    <div className="bg-design-light grid min-h-svh min-w-max grid-rows-[auto_1fr] px-[70px] py-[30px] dark:bg-design-black">
      <nav className="container mx-auto pb-10">
        <h1 className="text-xl font-bold uppercase text-design-gray-dark dark:text-design-white">
          Tetherstake
        </h1>
      </nav>
      <div className="container mx-auto grid grid-cols-4 grid-rows-7 gap-6">
        {figures.map((figure) => (
          <div key={figure.name} className="card grid grid-cols-[1fr_auto]">
            <h3 className="text-sm text-design-gray-dark dark:text-design-gray">
              {figure.name}
            </h3>
            <h3 className="rounded-full bg-design-green-light p-[1px_10px] text-xs font-medium text-design-black">
              USDT
            </h3>
            <h1 className="text-2xl font-bold text-design-gray-dark dark:text-design-white">
              ${figure.value}
            </h1>
          </div>
        ))}

        <section className="card col-span-2 col-start-1 row-span-3 grid grid-rows-[auto_1fr]">
          <h1 className="mb-6 text-base font-semibold text-design-gray-dark dark:text-design-gray-light">
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

        <section className="card col-span-2 col-start-3 row-span-3">
          <h1 className="mb-6 text-base font-semibold text-design-gray-dark dark:text-design-gray-light">
            Referral Link
          </h1>

          <div className="grid grid-cols-[1fr_auto] rounded-xl border-[1px] border-design-gray-light text-design-gray transition-colors ease-out focus-within:border-design-gray-light dark:border-design-gray-dark">
            <input
              className="border-none bg-transparent pl-4 outline-none"
              type="text"
              value={referralLink}
            />
            <button className="px-6 py-5 text-design-gray-dark transition-all duration-500 ease-in-out hover:text-design-green dark:text-design-green-light">
              <Clipboard />
            </button>
          </div>

          <h3 className="ml-auto block w-fit py-3 text-design-gray">
            Referral: {referrals.length}
          </h3>

          <div className="grid grid-rows-[auto_1fr_auto]">
            <div className="mb-4 flex flex-row justify-between border-b-[1px] border-design-gray pb-1 text-sm font-semibold text-design-gray-dark dark:border-design-gray-light dark:text-design-gray-light">
              <h2>ACCOUNT</h2>
              <h2>DATE REGISTER</h2>
              <h2>BENEFIT</h2>
            </div>

            {referrals.map((referr) => (
              <div className="mb-4 flex flex-row justify-between border-b-[1px] border-design-gray-light pb-2 text-sm text-design-gray dark:border-design-gray">
                <h2>{referr.account}</h2>
                <h2>{referr.date}</h2>
                <div className="flex gap-4">
                  <h2>{referr.benefit}</h2>
                  <h3 className="rounded-full bg-design-green-light p-[1px_10px] text-xs font-medium text-design-black">
                    USDT
                  </h3>
                </div>
              </div>
            ))}

            <div className="mb-4 flex flex-row justify-between text-base font-semibold text-design-gray-dark dark:text-design-gray-light">
              <h2>ACCOUNT</h2>
              <h2>DATE REGISTER</h2>
              <h2>BENEFIT</h2>
            </div>
          </div>
        </section>
        <section className="card col-span-4 col-start-1 row-span-2"></section>
      </div>
    </div>
  );
}

export default App;
