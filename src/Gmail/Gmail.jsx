import React from "react";
import { Link, Outlet } from "react-router-dom";

function Gmail() {
  return (
    <>
      <div className="container mx-auto px-2 py-4">
        <div class="grid grid-cols-5 gap-4">
          <div class="bg-gray-200 rounded">
            <ul>
              <li>
                <Link className="text-lg font-medium p-2" to="/gmail/inbox">
                  Inbox
                </Link>
              </li>
              <li>
                <Link className="text-lg font-medium p-2" to="/gmail/outbox">
                  Outbox
                </Link>
              </li>
              <li>
                <Link className="text-lg font-medium p-2" to="/gmail/spam">
                  Spam
                </Link>
              </li>
              <li>
                <Link className="text-lg font-medium p-2" to="/gmail/other">
                  Other
                </Link>
              </li>
            </ul>
          </div>
          <div class="col-span-4 bg-gray-200 rounded p-2">
            <Outlet />
          </div>
        </div>
      </div>
    </>
  );
}

export default Gmail;
