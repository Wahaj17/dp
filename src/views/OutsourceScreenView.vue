<!---->

<template>
  <div class="dashboard-container">
    <!-- Header -->
    <header class="header">
      <div class="logo-container">
        <img src="@/assets/side-logo-mubadala.png" alt="Mubadala Side Logo" class="logo" />
      </div>
      <div class="header-icons">

        <button class="icon-button">
          <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" class="icon message-icon">
            <path d="M21 11.5a8.38 8.38 0 0 1-.9 3.8 8.5 8.5 0 0 1-7.6 4.7 8.38 8.38 0 0 1-3.8-.9L3 21l1.9-5.7a8.38 8.38 0 0 1-.9-3.8 8.5 8.5 0 0 1 4.7-7.6 8.38 8.38 0 0 1 3.8-.9h.5a8.48 8.48 0 0 1 8 8v.5z"></path>
          </svg>
        </button>

        <div
         class="notification-wrapper"
         @mouseleave="closeNotificationsMenu"
         @mouseenter="cancelCloseNotificationsMenu">
        </div>

        <button class="icon-button notification" @click="toggleNotifications">
          <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" class="icon">
            <path d="M18 8A6 6 0 0 0 6 8c0 7-3 9-3 9h18s-3-2-3-9"></path>
            <path d="M13.73 21a2 2 0 0 1-3.46 0"></path>
          </svg>
          <span class="notification-badge">11</span>
        </button>

        <NotificationsMenu v-if="isNotificationsOpen" class="notifications-menu-position" />
      </div>
    </header>

    <div class="main-content">
      <!-- Sidebar -->
      <div class="sidebar-wrapper">
        <aside class="sidebar">
          <div class="sidebar-content">
            <div class="sidebar-items">
              <div class="sidebar-item active">
                <div class="avatar-container">
                  <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" class="icon">
                    <path d="M20 21v-2a4 4 0 0 0-4-4H8a4 4 0 0 0-4 4v2"></path>
                    <circle cx="12" cy="7" r="4"></circle>
                  </svg>
                </div>
              </div>
              <div class="sidebar-item">
                <div class="icon-container">
                  <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" class="icon">
                    <rect x="3" y="3" width="7" height="7"></rect>
                    <rect x="14" y="3" width="7" height="7"></rect>
                    <rect x="14" y="14" width="7" height="7"></rect>
                    <rect x="3" y="14" width="7" height="7"></rect>
                  </svg>
                </div>
              </div>
              <div class="sidebar-item">
                <div class="icon-container">
                  <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" class="icon">
                    <path d="M21 15a2 2 0 0 1-2 2H7l-4 4V5a2 2 0 0 1 2-2h14a2 2 0 0 1 2 2z"></path>
                  </svg>
                </div>
              </div>
              <div class="sidebar-item">
                <div class="icon-container">
                  <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" class="icon">
                    <polygon points="12 2 15.09 8.26 22 9.27 17 14.14 18.18 21.02 12 17.77 5.82 21.02 7 14.14 2 9.27 8.91 8.26 12 2"></polygon>
                  </svg>
                </div>
              </div>
              <div class="sidebar-item">
                <div class="icon-container">
                  <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" class="icon">
                    <circle cx="12" cy="12" r="10"></circle>
                    <line x1="12" y1="8" x2="12" y2="12"></line>
                    <line x1="12" y1="16" x2="12.01" y2="16"></line>
                  </svg>
                </div>
              </div>
            </div>
            <div class="powered-by">
              <img src="@/assets/takafo-logo.png" alt="TAKAFO Logo" class="takafo-logo" />
            </div>
          </div>
        </aside>
        <div class="sidebar-toggle">
          <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round">
            <polyline points="9 18 15 12 9 6"></polyline>
          </svg>
        </div>
      </div>

      <!-- Main Content Area -->
      <div class="content">
        <!-- Welcome Section -->
        <div class="welcome-card">
          <h2 class="welcome-text">Hey, <span class="welcome-highlight">Welcome!</span></h2>
        </div>

        <!-- Tasks Section -->
        <div class="tasks-section">
          <div class="tasks-header">
            <h2 class="tasks-title">Assigned Tasks</h2>
            <div class="tasks-actions">
              <div class="search-container">
                <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" class="search-icon">
                  <circle cx="11" cy="11" r="8"></circle>
                  <line x1="21" y1="21" x2="16.65" y2="16.65"></line>
                </svg>
                <input type="text" placeholder="Search Tasks..." class="search-input" />
              </div>
              <button class="filter-button">
                <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" class="filter-icon">
                  <line x1="4" y1="21" x2="4" y2="14"></line>
                  <line x1="4" y1="10" x2="4" y2="3"></line>
                  <line x1="12" y1="21" x2="12" y2="12"></line>
                  <line x1="12" y1="8" x2="12" y2="3"></line>
                  <line x1="20" y1="21" x2="20" y2="16"></line>
                  <line x1="20" y1="12" x2="20" y2="3"></line>
                  <line x1="1" y1="14" x2="7" y2="14"></line>
                  <line x1="9" y1="8" x2="15" y2="8"></line>
                  <line x1="17" y1="16" x2="23" y2="16"></line>
                </svg>
              </button>
            </div>
          </div>

          <!-- Tasks Table -->
          <div class="tasks-table-container">
            <table class="tasks-table">
              <thead>
                <tr>
                  <th class="checkbox-column">
                    <input type="checkbox" class="checkbox" />
                  </th>
                  <th>Candidate</th>
                  <th>JR Number</th>
                  <th>Project Code</th>
                  <th>Created At</th>
                  <th>Details</th>
                  <th>Status</th>
                  <th>Action</th>
                </tr>
              </thead>
              <tbody>
                <tr v-for="(task, index) in tasks" :key="index">
                  <td class="checkbox-column">
                    <input type="checkbox" class="checkbox" />
                  </td>
                  <td>
                    <div class="candidate-cell">
                      <div class="candidate-avatar">
                        <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" class="icon">
                          <path d="M20 21v-2a4 4 0 0 0-4-4H8a4 4 0 0 0-4 4v2"></path>
                          <circle cx="12" cy="7" r="4"></circle>
                        </svg>
                      </div>
                      <span class="candidate-name">{{ task.candidate }}</span>
                    </div>
                  </td>
                  <td>{{ task.jrNumber }}</td>
                  <td>{{ task.projectCode }}</td>
                  <td>{{ task.createdAt }}</td>
                  <td class="details-cell">{{ task.details }}</td>
                  <td>
                    <div class="status-badge" :class="getStatusClass(task.status)">
                      {{ task.status }}
                      <svg v-if="task.status !== 'Quoted' && task.status !== 'Completed'" xmlns="http://www.w3.org/2000/svg" width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" class="chevron-icon">
                        <polyline points="6 9 12 15 18 9"></polyline>
                      </svg>
                    </div>
                  </td>
                  <td>
                    <div class="action-buttons">
                      <button class="action-button">
                        <svg xmlns="http://www.w3.org/2000/svg" width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" class="action-icon">
                          <path d="M1 12s4-8 11-8 11 8 11 8-4 8-11 8-11-8-11-8z"></path>
                          <circle cx="12" cy="12" r="3"></circle>
                        </svg>
                      </button>
                      <button class="action-button">
                        <svg xmlns="http://www.w3.org/2000/svg" width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" class="action-icon">
                          <path d="M10 13a5 5 0 0 0 7.54.54l3-3a5 5 0 0 0-7.07-7.07l-1.72 1.71"></path>
                          <path d="M14 11a5 5 0 0 0-7.54-.54l-3 3a5 5 0 0 0 7.07 7.07l1.71-1.71"></path>
                        </svg>
                      </button>
                    </div>
                  </td>
                </tr>
              </tbody>
            </table>
          </div>

          <!-- Pagination -->
          <div class="pagination">
            <button class="pagination-arrow">
              <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" class="pagination-icon">
                <polyline points="15 18 9 12 15 6"></polyline>
              </svg>
            </button>
            <button class="pagination-number active">1</button>
            <button class="pagination-number">2</button>
            <button class="pagination-number">3</button>
            <button class="pagination-number">4</button>
            <button class="pagination-number">5</button>
            <button class="pagination-arrow">
              <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" class="pagination-icon">
                <polyline points="9 18 15 12 9 6"></polyline>
              </svg>
            </button>
          </div>
        </div>
      </div>
    </div>

    <!-- Chat Button -->
    <button class="chat-button">
      <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="white" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" class="chat-icon">
        <path d="M21 15a2 2 0 0 1-2 2H7l-4 4V5a2 2 0 0 1 2-2h14a2 2 0 0 1 2 2z"></path>
      </svg>
    </button>
  </div>
</template>

<script setup>
import NotificationsMenu from '../components/NotificationsMenu.vue';
import { ref } from 'vue';

const isNotificationsOpen = ref(false);
let closeTimeout = null; // Variable to hold timeout ID

const toggleNotifications = () => {
  isNotificationsOpen.value = !isNotificationsOpen.value;
};

const closeNotificationsMenu = () => {
  // Use a small delay to allow moving mouse onto menu
  closeTimeout = setTimeout(() => {
    isNotificationsOpen.value = false;
  }, 300); // 300ms delay
};

const cancelCloseNotificationsMenu = () => {
  // Clear the timeout if mouse enters the menu or button again
  clearTimeout(closeTimeout);
};

const tasks = ref([
  {
    candidate: 'Humaan Rassi',
    jrNumber: 'JR-2024-001',
    projectCode: 'IT-1007',
    createdAt: '24/10/2024',
    details: 'Developing secure and scalable RESTful APIs in...',
    status: 'Requested'
  },
  {
    candidate: 'Hammad Siddiqui',
    jrNumber: 'JR-2024-001',
    projectCode: 'IT-1007',
    createdAt: '24/10/2024',
    details: 'Developing secure and scalable RESTful APIs in...',
    status: 'In Progress'
  },
  {
    candidate: 'Kashida Ghazal',
    jrNumber: 'JR-2024-001',
    projectCode: 'IT-1007',
    createdAt: '24/10/2024',
    details: 'Developing secure and scalable RESTful APIs in...',
    status: 'Cancelled'
  },
  {
    candidate: 'Hammad Siddiqui',
    jrNumber: 'JR-2024-001',
    projectCode: 'IT-1007',
    createdAt: '24/10/2024',
    details: 'Developing secure and scalable RESTful APIs in...',
    status: 'Quoted'
  },
  {
    candidate: 'Humaan Rassi',
    jrNumber: 'JR-2024-001',
    projectCode: 'IT-1007',
    createdAt: '24/10/2024',
    details: 'Developing secure and scalable RESTful APIs in...',
    status: 'On Hold'
  },
  {
    candidate: 'Kashida Ghazal',
    jrNumber: 'JR-2024-001',
    projectCode: 'IT-1007',
    createdAt: '24/10/2024',
    details: 'Developing secure and scalable RESTful APIs in...',
    status: 'Completed'
  },
  {
    candidate: 'Kashida Ghazal',
    jrNumber: 'JR-2024-001',
    projectCode: 'IT-1007',
    createdAt: '24/10/2024',
    details: 'Developing secure and scalable RESTful APIs in...',
    status: 'Approved'
  }
]);

const getStatusClass = (status) => {
  const statusMap = {
    'Requested': 'status-requested',
    'In Progress': 'status-in-progress',
    'Cancelled': 'status-cancelled',
    'Quoted': 'status-quoted',
    'On Hold': 'status-on-hold',
    'Completed': 'status-completed',
    'Approved': 'status-approved'
  };

  return statusMap[status] || '';
};
</script>

<style scoped>
/* Global Styles */
* {
  margin: 0;
  padding: 0;
  box-sizing: border-box;
  font-family: -apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto, Oxygen, Ubuntu, Cantarell, 'Open Sans', 'Helvetica Neue', sans-serif;
}

.dashboard-container {
  display: flex;
  flex-direction: column;
  min-height: 100vh;
  background-color: #f5f5f7;
}

/* Header Styles */
.header {
  display: flex;
  justify-content: space-between;
  align-items: center;
  padding: 15px 20px;
  background-color: white;
  box-shadow: 0 1px 3px rgba(0, 0, 0, 0.05);
  height: 70px;
}

.logo {
  height: 30px;
}

.header-icons {
  display: flex;
  gap: 15px;
}

.icon-button {
  background: none;
  border: none;
  cursor: pointer;
  position: relative;
  display: flex;
  align-items: center;
  justify-content: center;
}

.notification {
  position: relative;
}

.notification-badge {
  position: absolute;
  top: -5px;
  right: -5px;
  background-color: #e74c3c;
  color: white;
  font-size: 10px;
  width: 16px;
  height: 16px;
  border-radius: 50%;
  display: flex;
  align-items: center;
  justify-content: center;
}

.icon {
  color: #333;
}

/* Main Content Layout */
.main-content {
  display: flex;
  flex: 1;
  padding: 20px 0 20px 20px;

}

/* Sidebar Styles */
.sidebar-wrapper {
  position: relative;
  margin-right: 20px;
  align-items: stretch;
}

.sidebar {
  width: 80px;
  background-color: white;
  border-radius: 12px;
  box-shadow: 0 1px 3px rgba(0, 0, 0, 0.05);
  padding: 20px 10px;
  height: calc(100vh + 110px);
  display: flex;
  flex-direction: column;
}

.sidebar-content {
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  height: 100%;
  width: 100%;
}

.sidebar-items {
  display: flex;
  flex-direction: column;
  gap: 25px;
  align-items: center;
}

.sidebar-item {
  width: 40px;
  height: 40px;
  display: flex;
  align-items: center;
  justify-content: center;
  border-radius: 8px;
  cursor: pointer;
}

.sidebar-item.active {
  background-color: #0a3d62;
}

.sidebar-item.active .icon {
  color: white;
}

.avatar-container, .icon-container {
  display: flex;
  align-items: center;
  justify-content: center;
}

.powered-by {
  display: flex;
  flex-direction: column;
  align-items: center;
  gap: 5px;
  font-size: 12px;
  color: #666;
  margin-top: auto;
  padding-top: 20px;
}

.takafo-logo {
  height: 30px;
}

.sidebar-toggle {
  position: absolute;
  right: -15px;
  top: 50%;
  transform: translateY(-50%);
  width: 30px;
  height: 30px;
  background-color: white;
  border-radius: 50%;
  display: flex;
  align-items: center;
  justify-content: center;
  box-shadow: 0 1px 3px rgba(0, 0, 0, 0.1);
  cursor: pointer;
  z-index: 10;
}

/* Content Area Styles */
.content {
  flex: 1;
  padding-right: 20px;
  display: flex;
  flex-direction: column;
  gap: 20px;
}

/* Welcome Card Styles */
.welcome-card {
  background-color: white;
  border-radius: 10px;
  padding: 25px;
  box-shadow: 0 1px 3px rgba(0, 0, 0, 0.05);
}

.welcome-text {
  font-size: 22px;
  font-weight: 500;
  color: #333;
}

.welcome-highlight {
  font-weight: 700;
}

/* Tasks Section Styles */
.tasks-section {
  background-color: white;
  border-radius: 10px;
  padding: 25px;
  box-shadow: 0 1px 3px rgba(0, 0, 0, 0.05);
  display: flex;
  flex-direction: column;
  gap: 20px;
  flex: 1;
}

.tasks-header {
  display: flex;
  justify-content: space-between;
  align-items: center;
}

.tasks-title {
  font-size: 20px;
  font-weight: 600;
  color: #333;
}

.tasks-actions {
  display: flex;
  gap: 10px;
  align-items: center;
}

.search-container {
  position: relative;
  display: flex;
  align-items: center;
}

.search-icon {
  position: absolute;
  left: 10px;
  color: #999;
}

.search-input {
  padding: 8px 10px 8px 35px;
  border: 1px solid #e0e0e0;
  border-radius: 5px;
  font-size: 14px;
  width: 200px;
  outline: none;
}

.filter-button {
  background: none;
  border: none;
  cursor: pointer;
  display: flex;
  align-items: center;
  justify-content: center;
  padding: 8px;
  border-radius: 5px;
}

.filter-icon {
  color: #333;
}

/* Table Styles */
.tasks-table-container {
  overflow-x: auto;
  flex: 1;
}

.tasks-table {
  width: 100%;
  border-collapse: collapse;
}

.tasks-table th, .tasks-table td {
  padding: 12px 15px;
  text-align: left;
  border-bottom: 1px solid #f0f0f0;
}

.tasks-table th {
  font-weight: 600;
  color: #666;
  font-size: 14px;
}

.tasks-table td {
  font-size: 14px;
  color: #333;
}

.checkbox-column {
  width: 40px;
}

.checkbox {
  width: 16px;
  height: 16px;
  cursor: pointer;
}

.candidate-cell {
  display: flex;
  align-items: center;
  gap: 10px;
}

.candidate-avatar {
  width: 30px;
  height: 30px;
  background-color: #e0f2fe;
  border-radius: 50%;
  display: flex;
  align-items: center;
  justify-content: center;
}

.candidate-name {
  font-weight: 500;
}

.details-cell {
  max-width: 250px;
  white-space: nowrap;
  overflow: hidden;
  text-overflow: ellipsis;
}

.status-badge {
  display: inline-flex;
  align-items: center;
  gap: 5px;
  padding: 5px 10px;
  border-radius: 15px;
  font-size: 13px;
  font-weight: 500;
}

.status-requested {
  background-color: #e0f2fe;
  color: #0369a1;
}

.status-in-progress {
  background-color: #e0f7fa;
  color: #0097a7;
}

.status-cancelled {
  background-color: #fef2f2;
  color: #b91c1c;
}

.status-quoted {
  background-color: #f0f9ff;
  color: #0c4a6e;
}

.status-on-hold {
  background-color: #fef9c3;
  color: #854d0e;
}

.status-completed {
  background-color: #f0fdf4;
  color: #166534;
}

.status-approved {
  background-color: #ecfdf5;
  color: #047857;
}

.chevron-icon {
  width: 14px;
  height: 14px;
}

.action-buttons {
  display: flex;
  gap: 10px;
}

.action-button {
  background: none;
  border: none;
  cursor: pointer;
  color: #666;
}

.action-icon {
  color: #666;
}

/* Pagination Styles */
.pagination {
  display: flex;
  justify-content: flex-start;
  align-items: center;
  gap: 5px;
  margin-top: 20px;
}

.pagination-arrow, .pagination-number {
  width: 35px;
  height: 35px;
  display: flex;
  align-items: center;
  justify-content: center;
  border: 1px solid #e0e0e0;
  border-radius: 5px;
  background: white;
  cursor: pointer;
  font-size: 14px;
  color: #666;
}

.pagination-number.active {
  background-color: #0a3d62;
  color: white;
  border-color: #0a3d62;
}

/* Chat Button */
.chat-button {
  position: fixed;
  bottom: 30px;
  right: 30px;
  width: 50px;
  height: 50px;
  border-radius: 50%;
  background-color: #0a3d62;
  border: none;
  display: flex;
  align-items: center;
  justify-content: center;
  cursor: pointer;
  box-shadow: 0 4px 10px rgba(0, 0, 0, 0.1);
}

.chat-icon {
  color: white;
}

.notification-wrapper {
  position: relative; /* Establishes positioning context for the menu */
}

.notifications-menu-position {
  position: absolute;
  top: 100%; /* Position below the wrapper */
  right: 0;  /* Align to the right edge of the wrapper */
  margin-top: 12px; /* Space between button and menu */
  z-index: 1000; /* Ensure menu is on top */
}

</style>
