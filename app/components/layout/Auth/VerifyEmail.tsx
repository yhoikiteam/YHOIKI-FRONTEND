import { useRouter } from "next/navigation";
import { useState, useRef, useEffect } from "react";

const VerifyEmail: React.FC = () => {
    const router = useRouter();
    const [error, setError] = useState<string>("");
    const [loading, setLoading] = useState<boolean>(false);
    const [otp, setOtp] = useState<string[]>(new Array(6).fill(""));
    const inputRefs = useRef<HTMLInputElement[]>([]);

    useEffect(() => {
        inputRefs.current = inputRefs.current.slice(0, 6);
    }, []);

    const handleChange = (index: number, value: string) => {
        if (!/^\d?$/.test(value)) return;

        const newOtp = [...otp];
        newOtp[index] = value;
        setOtp(newOtp);

        if (value !== "" && index < 5) {
            inputRefs.current[index + 1]?.focus();
        }
    };

    const handleKeyDown = (index: number, e: React.KeyboardEvent<HTMLInputElement>) => {
        if (e.key === "Backspace" && !otp[index] && index > 0) {
            inputRefs.current[index - 1]?.focus();
        }
    };

    const HandleSubmit = (e: React.FormEvent) => {
        e.preventDefault();

        if (otp.includes("")) {
            setError("Kode OTP harus lengkap!");
            return;
        }
    
        setLoading(true);
        setError(""); 

        console.log(otp.join(""))
    }

    return (
        <form onSubmit={HandleSubmit} className="bg-white w-3/5 h-72 rounded-3xl border border-gray-300 flex items-center shadow-xl relative">
            <button
                type="button"
                className="absolute top-4 right-4 text-gray-600 text-4xl"
                onClick={() => router.push("/")}
            >
                &times;
            </button>

            <div className="w-1/2 h-full flex justify-center items-center">
                <a href="/" id="logo" className="flex space-x-3 items-center p-5">
                    <img className="w-12" src="https://i.ibb.co.com/0DhSzYN/Yhoiki.png" alt="logo" />
                    <h1 className="text-gray-700 font-bold text-4xl">Yhoiki</h1>
                </a>
            </div>

            <div className="w-1/2 flex flex-col space-y-4 p-8 justify-center items-center text-gray-600">
                <h1 className="text-2xl font-bold text-gray-600">Verification Email</h1>
                
                <div className="flex space-x-2">
                    {otp.map((data, index) => (
                        <input
                            key={index}
                            type="text"
                            maxLength={1}
                            value={data}
                            onChange={(e) => handleChange(index, e.target.value)}
                            onKeyDown={(e) => handleKeyDown(index, e)}
                            ref={(el) => {
                                if (el) inputRefs.current[index] = el;
                            }}
                            className="w-12 h-12 text-center text-2xl border border-gray-300 rounded-lg focus:border-4 focus:border-color1 focus:outline-none hover:bg-gray-200"
                        />
                    ))}
                </div>

                <button
                    type="submit"
                    disabled={loading || otp.includes("")}
                    className={`w-full rounded-full p-2 duration-300 
                        ${otp.includes("") 
                            ? "bg-gray-200 cursor-not-allowed text-" 
                            : "bg-gradient-to-r from-color1 to-color2 text-white hover:from-color2 hover:to-color2"
                        }`}
                >
                    {loading ? "Verifying..." : "Verify Now"}
                </button>

                {error && <p className="text-red-500 text-sm mb-2">{error}</p>}
            </div>
        </form>
    );
};

export default VerifyEmail;
