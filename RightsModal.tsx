import { useState, useEffect } from "react";
import { legalRights, LegalRight } from "../utils/legalRights";

interface RightsModalProps {
  isOpen: boolean;
  onClose: () => void;
}

export default function RightsModal({ isOpen, onClose }: RightsModalProps) {
  const [filter, setFilter] = useState("");
  const [filteredRights, setFilteredRights] = useState<LegalRight[]>(legalRights);

  useEffect(() => {
    const filtered = legalRights.filter(({ title, description }) =>
      title.toLowerCase().includes(filter.toLowerCase()) ||
      description.toLowerCase().includes(filter.toLowerCase())
    );
    setFilteredRights(filtered);
  }, [filter]);

  if (!isOpen) return null;

  return (
    <div className="fixed inset-0 backdrop-blur-sm bg-black bg-opacity-70 flex justify-center items-start pt-20 z-50 overflow-auto">
      <div className="bg-gray-900 rounded-lg p-6 max-w-4xl w-full mx-4 max-h-[80vh] overflow-y-auto">
        <div className="flex justify-between items-center mb-4">
          <h2 className="text-xl font-semibold text-indigo-400">Indian Legal Rights</h2>
          <button onClick={onClose} className="text-indigo-400 font-bold text-2xl">×</button>
        </div>
        <input
          type="text"
          placeholder="Search rights..."
          value={filter}
          onChange={(e) => setFilter(e.target.value)}
          className="w-full p-2 rounded mb-4 bg-gray-800 text-white focus:outline-indigo-400"
        />
        <ul className="space-y-4">
          {filteredRights.map(({ id, title, description }) => (
            <li key={id} className="border border-gray-700 p-4 rounded hover:bg-gray-800">
              <h3 className="text-lg font-semibold text-indigo-300">{title}</h3>
              <p className="mt-1 text-gray-300">{description}</p>
            </li>
          ))}
          {filteredRights.length === 0 && <p className="text-center text-gray-500">No rights found matching "{filter}".</p>}
        </ul>
      </div>
    </div>
  );
}
