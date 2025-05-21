import React, { useState } from "react";
import Graph from "../assets/graph.svg";
import { MdDomain, MdEdit, MdPriorityHigh } from "react-icons/md";
import { FaCalendarAlt } from "react-icons/fa";
import { FaArrowDown, FaArrowUp } from "react-icons/fa6";
import { Link } from "react-router-dom";

const BillingPage = () => {
  const [wallets, setWallets] = useState([
    {
      id: 1,
      address: "2u4o2ujrrj92ur2jr292u3u2j",
      cardNumber: "7812 2139 0823 5678",
    },
  ]);

  const transactions = [
    {
      id: 1,
      title: "NEW SERVER",
      date: "27 March 2020, at 12:30 PM",
      amount: "2500 USDT",
      type: "debit",
      status: "",
      category: "NEWEST",
    },
    {
      id: 2,
      title: "UP 39.31.45.44",
      date: "27 March 2020, at 12:30 PM",
      amount: "2500 USDT",
      type: "credit",
      status: "",
      category: "NEWEST",
    },
    {
      id: 3,
      title: "UP 39.31.45.44",
      date: "26 March 2020, at 13:45 PM",
      amount: "2500 USDT",
      type: "credit",
      status: "",
      category: "YESTERDAY",
    },
    {
      id: 4,
      title: "UP 39.31.45.44",
      date: "26 March 2020, at 12:30 PM",
      amount: "2500 USDT",
      type: "credit",
      status: "",
      category: "YESTERDAY",
    },
    {
      id: 5,
      title: "PLEASE",
      date: "26 March 2020, at 05:00 AM",
      amount: "",
      type: "neutral",
      status: "Pending",
      category: "YESTERDAY",
    },
    {
      id: 6,
      title: "NEW SERVER",
      date: "25 March 2020, at 16:30 PM",
      amount: "2500 USDT",
      type: "debit",
      status: "",
      category: "YESTERDAY",
    },
  ];

  const [showModal, setShowModal] = useState(false);
  const [newWalletAddress, setNewWalletAddress] = useState("");
  const [newCardNumber, setNewCardNumber] = useState("");

  const [editingWalletId, setEditingWalletId] = useState(null);

  const formatCardNumber = (value) => {
    const digits = value.replace(/\D/g, "");

    let formatted = "";
    for (let i = 0; i < digits.length; i++) {
      if (i > 0 && i % 4 === 0) {
        formatted += " ";
      }
      formatted += digits[i];
    }

    return formatted.slice(0, 19);
  };

  const maskCardNumber = (number) => {
    if (!number) return "";
    const parts = number.split(" ");
    if (parts.length === 4) {
      return `${parts[0]} ${parts[1]} ${parts[2]} XXXX`;
    }
    return number;
  };

  const handleAddWallet = () => {
    setShowModal(true);
  };

  const handleSubmitNewWallet = (e) => {
    e.preventDefault();

    if (newWalletAddress && newCardNumber) {
      const newWallet = {
        id: Date.now(), // Simple unique ID
        address: newWalletAddress,
        cardNumber: newCardNumber,
      };

      setWallets([...wallets, newWallet]);
      setNewWalletAddress("");
      setNewCardNumber("");
      setShowModal(false);
    }
  };

  const handleEditClick = (id) => {
    setEditingWalletId(id);
  };

  const handleCardNumberChange = (id, value) => {
    const formattedValue = formatCardNumber(value);
    setWallets(
      wallets.map((wallet) =>
        wallet.id === id ? { ...wallet, cardNumber: formattedValue } : wallet
      )
    );
  };

  const handleNewCardNumberChange = (e) => {
    const formattedValue = formatCardNumber(e.target.value);
    setNewCardNumber(formattedValue);
  };

  const handleBlur = () => {
    setEditingWalletId(null);
  };

  const groupedTransactions = transactions.reduce((groups, transaction) => {
    if (!groups[transaction.category]) {
      groups[transaction.category] = [];
    }
    groups[transaction.category].push(transaction);
    return groups;
  }, {});

  return (
    <main className="w-full max-w-[1600px] mx-auto px-4 xl:px-8 flex flex-col gap-10">
      <section className="flex flex-col lg:flex-row items-center gap-4">
        <div
          className="w-full max-w-[460px] bg-[url('./assets/bg_need.png')]  bg-cover bg-center p-6 rounded-[18px]"
          style={{
            background:
              "linear-gradient(118.92deg, #582CFF 34.49%, #000000 106.08%)",
          }}
        >
          <h1 className="text-white text-lg font-bold">TRC 20</h1>
          <p className="text-xl font-bold text-white mt-16">
            2u4o2ujrrj92ur2jr292u3u2j
          </p>
          <div className="flex items-center gap-14 mt-3">
            <p className="text-white uppercase font-bold text-sm flex flex-col">
              <span className="text-[10px] font-medium">Coin</span> USDT
            </p>
            <p className="text-white uppercase font-bold text-sm flex flex-col">
              <span className="text-[10px] font-medium">Waller</span> copy
              addres
            </p>
          </div>
        </div>
        <div
          className="w-full max-w-[416px] rounded-[18px] p-6"
          style={{
            background:
              "linear-gradient(127.09deg, rgba(6, 11, 40, 0.94) 19.41%, rgba(10, 14, 35, 0.49) 76.65%)",
          }}
        >
          <div
            className="p-4 rounded-[18px] text-white flex items-center justify-between"
            style={{
              background:
                "linear-gradient(126.75deg, rgba(34, 41, 78, 0.94) -4.23%, rgba(10, 14, 35, 0.49) 76.75%)",
            }}
          >
            <div className="flex flex-col gap-1">
              <p className="text-xs font-medium">WALLET Balance</p>
              <h1 className="font-bold uppercase text-3xl">250 USDT</h1>
            </div>
            <img src={Graph} alt="graph" />
          </div>
          <h3 className="uppercase text-[#A0AEC0] text-xs mt-4">Newest</h3>
          <div className="mt-2 text-white flex items-center justify-between ">
            <div className="flex items-center gap-2">
              <div className="w-[42px] h-[42px] rounded-full bg-[#1A1F37] flex items-center justify-center text-xl">
                <MdDomain className="text-[#01B574]" />
              </div>
              <p className="flex flex-col gap-1 text-sm text-[#A0AEC0] font-medium">
                <span className="uppercase text-white">Get +</span> Today,{" "}
                {new Date().toLocaleTimeString()}
              </p>
            </div>
            <h1 className="uppercase text-sm font-bold">154.50 USDT</h1>
          </div>
        </div>
      </section>

      {/* add a new tric */}

      <section
        className="w-full max-w-[900px] p-4 rounded-[18px] text-white"
        style={{
          background:
            "linear-gradient(127.09deg, rgba(6, 11, 40, 0.94) 19.41%, rgba(10, 14, 35, 0.49) 76.65%)",
        }}
      >
        <div className="flex justify-between items-center mb-8">
          <h1 className="text-lg font-bold uppercase">WALLET TRC 20 USDT</h1>
          <button
            onClick={handleAddWallet}
            className="bg-[#0075FF] text-[10px] text-white font-medium w-[134px] h-[35px] cursor-pointer rounded-full transition-colors"
          >
            ADD A NEW TRC 20
          </button>
        </div>

        <div className="space-y-6">
          {wallets.map((wallet) => (
            <div
              key={wallet.id}
              className="grid grid-cols-1 md:grid-cols-2 gap-6"
            >
              {/* Wallet Address Input */}
              <div className="border-gradient p-1 pl-4 flex items-center rounded-[18px]">
                <div className="w-4 h-4 bg-white rounded-full mr-3"></div>
                <input
                  type="text"
                  value={wallet.address}
                  readOnly
                  className="bg-transparent border-none outline-none w-full py-3 text-white"
                />
              </div>

              {/* Card Number Input with Edit Functionality */}
              <div className="border-gradient rounded-full p-1 pl-4 flex items-center">
                <span className="text-xs font-bold mr-3">VISA</span>
                {editingWalletId === wallet.id ? (
                  <input
                    type="text"
                    value={wallet.cardNumber}
                    onChange={(e) =>
                      handleCardNumberChange(wallet.id, e.target.value)
                    }
                    onBlur={handleBlur}
                    autoFocus
                    className="bg-transparent border-none outline-none w-full py-3 text-white"
                    maxLength={19}
                  />
                ) : (
                  <input
                    type="text"
                    value={maskCardNumber(wallet.cardNumber)}
                    readOnly
                    className="bg-transparent border-none outline-none w-full py-3 text-white"
                  />
                )}
                <button
                  onClick={() => handleEditClick(wallet.id)}
                  className="w-8 h-8 flex items-center justify-center text-white cursor-pointer"
                >
                  <MdEdit />
                </button>
              </div>
            </div>
          ))}
        </div>

        {/* Modal for adding new wallet */}
        {showModal && (
          <div className="fixed inset-0 bg-gray-500/10 flex items-center justify-center z-50">
            <div className="bg-blue-900 p-6 rounded-xl w-full max-w-md">
              <h2 className="text-xl font-bold mb-4">Add New TRC 20 Wallet</h2>
              <form onSubmit={handleSubmitNewWallet}>
                <div className="mb-4">
                  <label className="block mb-2">Wallet Address</label>
                  <input
                    type="text"
                    value={newWalletAddress}
                    onChange={(e) => setNewWalletAddress(e.target.value)}
                    className="w-full border border-gradient outline-none rounded-full p-3 text-white"
                    placeholder="Enter wallet address"
                    required
                  />
                </div>
                <div className="mb-6">
                  <label className="block mb-2">Card Number</label>
                  <input
                    type="text"
                    value={newCardNumber}
                    onChange={handleNewCardNumberChange}
                    className="w-full bg-blue-950/50 border-gradient outline-none border rounded-full p-3 text-white"
                    placeholder="XXXX XXXX XXXX XXXX"
                    maxLength={19}
                    required
                  />
                </div>
                <div className="flex justify-end space-x-3">
                  <button
                    type="button"
                    onClick={() => setShowModal(false)}
                    className="px-4 py-2 bg-gradient-to-br from-[#060C29] to-[#040C30]/[0.5] rounded-[18px] text-sm cursor-pointer"
                  >
                    Cancel
                  </button>
                  <button
                    type="submit"
                    className="px-4 py-2 bg-[#0075FF] rounded-[18px] cursor-pointer text-sm"
                  >
                    Add Wallet
                  </button>
                </div>
              </form>
            </div>
          </div>
        )}
      </section>

      {/* transactions */}

      <section
        className="w-full max-w-[674px] text-white p-5 rounded-[18px]"
        style={{
          background:
            "linear-gradient(127.09deg, rgba(6, 11, 40, 0.94) 19.41%, rgba(10, 14, 35, 0.49) 76.65%)",
        }}
      >
        <div className="max-w-3xl mx-auto">
          <div className="flex justify-between items-center mb-6">
            <h1 className="text-sm md:text-lg font-bold">Your Transactions</h1>
            <div className="flex items-center gap-2 text-sm text-gray-300">
              <FaCalendarAlt />
              12 March 2020
            </div>
          </div>

          {Object.keys(groupedTransactions).map((category) => (
            <div key={category} className="mb-6">
              <div className="text-xs text-gray-400 font-medium mb-2">
                {category}
              </div>
              <div className="space-y-3">
                {groupedTransactions[category].map((transaction) => (
                  <div
                    key={transaction.id}
                    className="flex items-center justify-between rounded-lg p-3 md:p-4"
                  >
                    <div className="flex items-center">
                      <div
                        className={`w-8 h-8 rounded-full flex items-center justify-center mr-3 ${
                          transaction.type === "debit"
                            ? "border border-[#E31A1A] rounded-full text-[#E31A1A]"
                            : transaction.type === "credit"
                            ? "border border-[#01B574] rounded-full text-[#01B574]"
                            : "border border-[#A0AEC0] rounded-full text-[#A0AEC0]"
                        }`}
                      >
                        {transaction.type === "debit" && (
                          <span className="text-xs">
                            <FaArrowDown />
                          </span>
                        )}
                        {transaction.type === "credit" && (
                          <span className="text-xs">
                            <FaArrowUp />
                          </span>
                        )}
                        {transaction.type === "neutral" && (
                          <span className="text-xs">
                            <MdPriorityHigh />
                          </span>
                        )}
                      </div>
                      <div>
                        <div className="font-medium">{transaction.title}</div>
                        <div className="text-xs text-gray-400">
                          {transaction.date}
                        </div>
                      </div>
                    </div>
                    <div className="text-right">
                      {transaction.status ? (
                        <div className="text-gray-400">
                          {transaction.status}
                        </div>
                      ) : transaction.type === "credit" ? (
                        <div className="text-green-500">
                          + {transaction.amount}
                        </div>
                      ) : (
                        <div className="flex items-center">
                          <span className="text-gray-400 mr-1">•</span>
                          <span>{transaction.amount}</span>
                        </div>
                      )}
                    </div>
                  </div>
                ))}
              </div>
            </div>
          ))}
        </div>
      </section>

      <footer className="w-full flex flex-col sm:flex-row gap-2 items-center justify-between pb-4">
        <p className="text-sm font-medium text-white"> @ {new Date().getFullYear()}, Made with ❤</p>
        <nav className="flex items-center gap-10">
          <Link to="/" className="text-white text-sm font-normal uppercase">Big data</Link>
          <Link to="/" className="text-white text-sm font-normal uppercase">Wallet</Link>
          <Link to="/" className="text-white text-sm font-normal uppercase">License</Link>
        </nav>
      </footer>
    </main>
  );
};

export default BillingPage;
