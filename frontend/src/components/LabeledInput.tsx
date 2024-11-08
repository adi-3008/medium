type labeledInputType = {
    lable: string;
    placeholder: string;
    onChange: (event: React.ChangeEvent<HTMLInputElement>) => void;
    type?: string;
};
export function LabeledInput({
    lable, placeholder, onChange, type
}: labeledInputType) {
    return <div>
        <div>
            <label className="block mb-2 text-sm text-gray-900 dark:text-white font-bold pt-4">
                {lable}
            </label>
            <input type={type || "text"} onChange={onChange} className="bg-gray-50 border border-gray-300
             text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 
             block w-full p-2.5"
                placeholder={placeholder} required />
        </div>
    </div>;
}
