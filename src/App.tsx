import Clipboard from "./Icons/Clipboard";
import Chart from "./components/Chart";
import Navbar from "./components/Navbar";

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
  {
    id: "123",
    account: "0x50E4...5e05",
    date: "10/3/2024",
    benefit: "1.5 USDT",
  },
  {
    id: "456",
    account: "0x48E6...6e85",
    date: "09/3/2024",
    benefit: "1.5 USDT",
  },
];
const transactionHistory = [
  {
    id: "789",
    type: "Deposit",
    date: "10/3/2024",
    status: "pending",
    asset: "USDT",
    amount: "10",
    hash: "0xC8FD...3BEF",
  },
  {
    id: "101112",
    type: "Deposit",
    date: "10/3/2024",
    status: "success",
    asset: "USDT",
    amount: "10",
    hash: "0xC8FD...3BEF",
  },
];

function App() {
  return (
    <div className="grid min-h-svh min-w-max grid-rows-[auto_1fr] bg-design-light px-5 py-[30px] font-inter lg:px-[70px] dark:bg-design-black">
      <Navbar />
      <div className="container mx-auto grid grid-cols-2 gap-6 lg:grid-rows-[auto_auto_auto_1fr] lg:grid-cols-4">
        {figures.map((figure) => (
          <div
            key={figure.name}
            className="card grid h-fit grid-cols-[1fr_auto] overflow-hidden"
          >
            <h3 className="text-sm text-design-gray-dark dark:text-design-gray">
              {figure.name}
            </h3>
            <div>
              <h3 className="rounded-full bg-design-green-light p-[3px_11px] text-xs font-medium text-design-black">
                USDT
              </h3>
            </div>

            <h1 className="animate-appearFromLeft text-2xl font-bold text-design-gray-dark dark:text-design-white">
              ${figure.value}
            </h1>
          </div>
        ))}
        <section className="card col-span-2 row-start-3 grid min-h-96 grid-rows-[auto_1fr]">
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
        <section className="card col-span-2">
          <h1 className="mb-6 text-base font-semibold text-design-gray-dark dark:text-design-gray-light">
            Referral Link
          </h1>

          <div className="grid grid-cols-[1fr_auto] rounded-xl border-[1px] border-design-gray-light text-design-gray transition-colors ease-out focus-within:border-design-gray-light dark:border-design-gray-dark">
            <input
              className="border-none bg-transparent pl-4 outline-none"
              type="text"
              value={referralLink}
              readOnly={true}
            />
            <button className="px-6 py-5 text-design-gray-dark transition-all duration-500 ease-in-out hover:text-design-green dark:text-design-green-light">
              <Clipboard />
            </button>
          </div>

          <h3 className="ml-auto block w-fit py-3 text-design-gray">
            Referral: {referrals.length}
          </h3>

          <div>
            <div className="mb-4 grid grid-cols-3 border-b-[1px] border-design-gray pb-1 text-sm font-semibold text-design-gray-dark dark:border-design-gray-light dark:text-design-gray-light">
              <h2>ACCOUNT</h2>
              <h2>DATE REGISTER</h2>
              <h2 className="text-end">BENEFIT</h2>
            </div>

            {referrals.map((referr) => (
              <div
                className="mb-4 grid grid-cols-3 border-b-[1px] border-design-gray pb-2 text-sm text-design-gray dark:border-design-gray-light"
                key={referr.id}
              >
                <h2>{referr.account}</h2>
                <h2>{referr.date}</h2>
                <div className="flex justify-end gap-4">
                  <h2>{referr.benefit}</h2>
                  <h3 className="rounded-full bg-design-green-light p-[1px_10px] text-xs font-medium text-design-black">
                    USDT
                  </h3>
                </div>
              </div>
            ))}

            <div className="mb-4 grid grid-cols-3 pb-1 text-sm font-semibold text-design-gray-dark dark:text-design-gray-light">
              <h2>ACCOUNT</h2>
              <h2>DATE REGISTER</h2>
              <h2 className="text-end">BENEFIT</h2>
            </div>
          </div>
        </section>
        <section className="card col-span-2 lg:col-span-4">
          <h1 className="mb-6 text-base font-semibold text-design-gray-dark dark:text-design-gray-light">
            Transition History
          </h1>
          <div className="">
            <div className="mb-4 grid grid-cols-6 border-b-[1px] border-design-gray pb-1 text-xs font-semibold text-design-gray-dark dark:border-design-gray dark:text-design-gray-light">
              <h2>TYPE</h2>
              <h2>DATE</h2>
              <h2>STATUS</h2>
              <h2>ASSET</h2>
              <h2>AMOUNT</h2>
              <h2>HASH</h2>
              <span></span>over
            </div>

            {transactionHistory.map((trns) => (
              <div
                className="mb-4 grid grid-cols-6 border-b-[1px] border-design-gray pb-2 text-xs text-design-gray"
                key={trns.id}
              >
                <h3>{trns.type}</h3>
                <h3>{trns.date}</h3>
                <div>
                  <h3
                    className={`w-fit rounded-full px-2 text-[10px] font-medium uppercase text-design-light ${trns.status === "success" ? "bg-design-success" : "bg-design-pending"}`}
                  >
                    {trns.status}
                  </h3>
                </div>

                <h3>{trns.asset}</h3>
                <h3>{trns.amount}</h3>
                <h3>{trns.hash}</h3>
                <h3></h3>
              </div>
            ))}

            <div className="mb-4 grid grid-cols-6 border-b-[1px] border-design-gray pb-1 text-xs font-semibold text-design-gray-dark dark:border-design-gray dark:text-design-gray-light">
              <h2>TYPE</h2>
              <h2>DATE</h2>
              <h2>STATUS</h2>
              <h2>ASSET</h2>
              <h2>AMOUNT</h2>
              <h2>HASH</h2>
              <span></span>
            </div>
          </div>
        </section>
      </div>
    </div>
  );
}

export default App;
