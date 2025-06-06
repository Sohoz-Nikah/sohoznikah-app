// File: src/app/(main)/dashboard/DashboardMainMyBioStatus.tsx
export default function DashboardMainMyBioStatus() {
  return (
    <div className="w-96 bg-[#f2f4fc] p-8 flex flex-col space-y-4 rounded-xl">
      <div className="text-2xl text-[#005381] text-center mb-8">
        আপনি সর্বমোট বায়োডাটা
      </div>
      <div className="flex justify-between">
        <div>পছন্দের তালিকায় রেখেছেন</div>
        <div className="w-6 text-center">৮</div>
      </div>
      <div className="flex justify-between">
        <div>শর্টলিস্টে রেখেছেন</div>
        <div className="w-6 text-center">৮</div>
      </div>
      <div className="flex justify-between">
        <div>প্রাথমিক প্রস্তাব পাঠিয়েছেন</div>
        <div className="w-6 text-center">৫</div>
      </div>
      <div className="flex justify-between">
        <div>যোগাযোগ তথ্য নিয়েছেন </div>
        <div className="w-6 text-center">৩</div>
      </div>
      <div className="flex justify-between">
        <div>রিপোর্ট করেছেন</div>
        <div className="w-6 text-center">৩</div>
      </div>
    </div>
  );
}
