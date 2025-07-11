import { QuestionMarkCircleIcon } from '@heroicons/react/24/outline';

const InfoDropDown = ({ info }: { info: string }) => (
  <div className="dropdown dropdown-end dropdown-hover">
    <div tabIndex={0} role="button">
      <QuestionMarkCircleIcon className="h-5" />
    </div>
    <div tabIndex={0} className="card dropdown-content bg-base-100 rounded-none z-1 w-80 shadow-sm">
      <div tabIndex={0} className="card-body">
        <p>{info}</p>
      </div>
    </div>
  </div>
);

export default InfoDropDown;
