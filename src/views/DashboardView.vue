<template>
  <div class="dashboard-layout">
    <header class="app-header">
      <img src="@/assets/side-logo-mubadala.png" alt="Mubadala Side Logo" class="logo">
      <div class="header-actions">
         <span>(Header Icons)</span>
      </div>
    </header>

    <div class="content-wrapper">
      <aside class="app-sidebar">
        <nav class="sidebar-nav">
          <div class="nav-item active"><IconUser /></div>
          <div class="nav-item active"><IconGrid /></div>
          <div class="nav-item active"><IconPower /></div>
          <div class="nav-item active"><IconSettings /></div>
        </nav>
        <div class="sidebar-footer">
           <span>(Footer Logo)</span>
        </div>
      </aside>

      <main class="main-content">
        <h1>Hey, Welcome!</h1>
        <div class="tasks-section">
          <div class="tasks-header">
            <h2 class="tasks-title">Assigned Tasks</h2>
            <div class="tasks-controls">
              <div class="search-input-wrapper">
                <IconSearch class="search-icon" /><input type="search" placeholder="Search Tasks..." class="search-input"></div>
              <button class="filter-button"><IconFilter /></button>
            </div>
          </div>

          <table class="tasks-table">
            <thead>
              <tr>
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
              <tr v-for="task in tasks" :key="task.id">
                <td>{{ task.candidate }}</td>
                <td>{{ task.jrNumber }}</td>
                <td>{{ task.projectCode }}</td>
                <td>{{ task.createdAt }}</td>
                <td>{{ task.details }}</td>
                <td>
                  <span class="status-tag" :class="getStatusClass(task.status)">
                    {{ task.status }}
                  </span>
                </td>
                <td class="action-cell">
                  <IconEye class="action-icon" />
                </td>
              </tr>
            </tbody>
          </table>

          <div class="pagination-controls">
            <button><IconChevronLeft /></button> <button>1</button>
            <button>2</button>
            <span>...</span>
            <button><IconChevronRight /></button>
          </div>

        </div>
         </main>
    </div>

    <button class="fab"><IconPlus /></button>

  </div>
</template>

<script>
import IconEye from '@/components/IconEye.vue';
import IconUser from '@/components/IconUser.vue';
import IconGrid from '@/components/IconGrid.vue';
import IconPower from '@/components/IconPower.vue';
import IconSettings from '@/components/IconSettings.vue';
import IconSearch from '@/components/IconSearch.vue';
import IconFilter from '@/components/IconFilter.vue';
import IconPlus from '@/components/IconPlus.vue';
import IconChevronLeft from '@/components/IconChevronLeft.vue';
import IconChevronRight from '@/components/IconChevronRight.vue';

export default {
  name: 'DashboardView',
  // We will add data and methods later
  components: {
    IconEye,
    IconUser,
    IconGrid,
    IconPower,
    IconSettings,
    IconSearch,
    IconFilter,
    IconPlus,
    IconChevronLeft,
    IconChevronRight
  },

  data() {
    // This function holds the component's local data
    return {
      // Sample task data array (replace with real data later)
      tasks: [
        { candidate: 'Human Rossi', jrNumber: 'JR-2024-001', projectCode: 'IT-1007', createdAt: '24/10/2024', details: 'Developing secure and scalable RESTful APIs in...', status: 'Requested', id: 1 },
        { candidate: 'Hammad Siddiqui', jrNumber: 'JR-2024-001', projectCode: 'IT-1007', createdAt: '24/10/2024', details: 'Developing secure and scalable RESTful APIs in...', status: 'In Progress', id: 2 },
        { candidate: 'Kashida Ghazal', jrNumber: 'JR-2024-001', projectCode: 'IT-1007', createdAt: '24/10/2024', details: 'Developing secure and scalable RESTful APIs in...', status: 'Cancelled', id: 3 },
        { candidate: 'Hammad Siddiqui', jrNumber: 'JR-2024-001', projectCode: 'IT-1007', createdAt: '24/10/2024', details: 'Developing secure and scalable RESTful APIs in...', status: 'Quoted', id: 4 },
        { candidate: 'Human Rossi', jrNumber: 'JR-2024-001', projectCode: 'IT-1007', createdAt: '24/10/2024', details: 'Developing secure and scalable RESTful APIs in...', status: 'On Hold', id: 5 },
        { candidate: 'Kashida Ghazal', jrNumber: 'JR-2024-001', projectCode: 'IT-1007', createdAt: '24/10/2024', details: 'Developing secure and scalable RESTful APIs in...', status: 'Completed', id: 6 },
        { candidate: 'Kashida Ghazal', jrNumber: 'JR-2024-001', projectCode: 'IT-1007', createdAt: '24/10/2024', details: 'Developing secure and scalable RESTful APIs in...', status: 'Approved', id: 7 }
      ]
      // We will add methods later if needed
    };
  },
  methods: {
    getStatusClass(status) {
      // Convert status text to a CSS-friendly class name
      // e.g., "In Progress" becomes "status-inprogress"
      // e.g., "On Hold" becomes "status-onhold"
      // const statusClass = status.toLowerCase().replace(/\s+/g, '-');
      // return `status-${statusClass}`;

      // Alternatively, use a more explicit mapping:

      switch (status.toLowerCase()) {
        case 'requested': return 'status-requested';
        case 'in progress': return 'status-inprogress';
        case 'cancelled': return 'status-cancelled';
        case 'quoted': return 'status-quoted';
        case 'on hold': return 'status-onhold';
        case 'completed': return 'status-completed';
        case 'approved': return 'status-approved';
        default: return 'status-default'; // Fallback style
      }
    }
  }

};
</script>

<style scoped>
.dashboard-layout {
  display: flex;
  flex-direction: column; /* Stack header on top of content-wrapper */
  height: 100vh; /* Full viewport height */
  background-color: #f8f9fa; /* Similar light background */
  overflow: hidden; /* Prevent scrolling issues from nested elements */
}

/* --- Header Styling --- */
.app-header {
  display: flex;
  justify-content: space-between; /* Logo left, Actions right */
  align-items: center;
  padding: 10px 25px; /* Vertical and horizontal padding */
  background-color: #fff; /* White background for header */
  border-bottom: 1px solid #e0e0e0; /* Separator line */
  height: 60px; /* Fixed header height */
  flex-shrink: 0; /* Prevent header from shrinking */
}
.app-header .logo {
  height: 35px; /* Adjust logo size for header */
  max-width: 200px; /* Keep max width */
  margin-bottom: 0; /* Remove margin if applied previously */
}
.header-actions {
  /* Placeholder styling */
  color: #aaa;
}

/* --- Content Wrapper (Sidebar + Main) --- */
.content-wrapper {
  display: flex; /* Arrange sidebar and main content side-by-side */
  flex-grow: 1; /* Allow this area to grow and fill remaining vertical space */
  overflow: hidden; /* Prevent unwanted scrollbars on the wrapper */
}

/* --- Sidebar Styling --- */
.app-sidebar {
  width: 70px; /* Width of the collapsed sidebar */
  background-color: #fff; /* White sidebar */
  border-right: 1px solid #e0e0e0; /* Separator line */
  display: flex;
  flex-direction: column; /* Stack nav items and footer */
  padding: 20px 0; /* Vertical padding */
  flex-shrink: 0; /* Prevent sidebar from shrinking */
}
.sidebar-nav {
  flex-grow: 1; /* Allow nav items to take up available space */
}
.nav-item {
  padding: 15px 0; /* Spacing around nav items */
  text-align: center;
  cursor: pointer;
  color: #aaa; /* Placeholder icon color */
  font-size: 12px; /* Placeholder text size */
}
.nav-item.active {
  /* Indicate active state - simple version */
  background-color: #eef;
  color: #003870; /* Example active color */
  /* In real app, use border-left or other indicators */
}
.nav-item:hover {
   background-color: #f5f5f5; /* Hover effect */
}
.sidebar-footer {
   padding: 20px 0;
   text-align: center;
   color: #aaa;
   font-size: 10px;
}


/* --- Main Content Styling --- */
.main-content {
  flex-grow: 1; /* Allow main content to take remaining horizontal space */
  padding: 25px; /* Padding inside the main area */
  overflow-y: auto; /* Allow ONLY main content to scroll vertically if needed */
  background-color: #f8f9fa; /* Background for content area */
}
.main-content h1 {
    margin-top: 0; /* Remove default margin */
    font-size: 22px;
    font-weight: 600;
    color: #333;
    margin-bottom: 20px;
}

/* --- Floating Action Button (FAB) Styling --- */
.fab {
  position: absolute; /* Position relative to the nearest positioned ancestor (likely .dashboard-layout) */
  bottom: 30px;
  right: 30px;
  width: 56px;
  height: 56px;
  background-color: #003870; /* Primary blue */
  color: white;
  border: none;
  border-radius: 50%; /* Make it round */
  font-size: 28px; /* Size of the '+' sign */
  line-height: 56px; /* Center the '+' vertically */
  text-align: center;
  cursor: pointer;
  box-shadow: 0 4px 12px rgba(0, 0, 0, 0.15);
  z-index: 100; /* Ensure it's above other content */
}
.fab:hover {
   background-color: #002a52;
}

.tasks-section {
  margin-top: 25px; /* Space below welcome message */
  background-color: #fff; /* White background for the tasks card */
  padding: 20px;
  border-radius: 8px;
  box-shadow: 0 2px 4px rgba(0, 0, 0, 0.05);
}

.tasks-header {
  display: flex;
  justify-content: space-between;
  align-items: center;
  margin-bottom: 20px;
}

.tasks-title {
  font-size: 18px;
  font-weight: 600;
  color: #333;
  margin: 0; /* Remove default margin */
}

.tasks-controls {
  display: flex;
  align-items: center;
  gap: 10px; /* Space between search and filter */
}

.search-input {
  padding: 8px 12px 8px 32px; /* Top, Right, Bottom, LEFT padding */
  /* Make sure padding-left is large enough (e.g., 32px) */
  /* Other styles: width, border, etc. */
  width: 100%; /* Make input fill the wrapper */
  border: 1px solid #ccc;
  border-radius: 6px;
  font-size: 14px;
  box-sizing: border-box;
}

.search-input-wrapper {
  position: relative;
  display: flex;
  align-items: center;
}

.search-input::placeholder {
    color: #aaa;
}

.filter-button {
  padding: 8px 10px;
  background-color: #f0f0f0;
  border: 1px solid #ccc;
  border-radius: 6px;
  cursor: pointer;
  color: #666;
}
.filter-button:hover {
    background-color: #e0e0e0;
}

/* --- Task Table Styling --- */
.tasks-table {
  width: 100%;
  border-collapse: collapse; /* Merge borders */
  font-size: 14px;
}

.tasks-table th,
.tasks-table td {
  border: 1px solid #e0e0e0; /* Light grey borders */
  padding: 10px 12px; /* Cell padding */
  text-align: left;
  vertical-align: middle; /* Align text vertically */
}

.tasks-table thead th {
  background-color: #f8f9fa; /* Light background for headers */
  font-weight: 600;
  color: #555;
}

/* --- Status Tag Styling --- */
.status-tag {
  padding: 4px 8px;
  border-radius: 12px; /* Pill shape */
  font-size: 12px;
  font-weight: 500;
  white-space: nowrap; /* Prevent wrapping */
}

/* Define colors for each status class generated by getStatusClass() */
.status-requested { background-color: #e0e0e0; color: #333; }
.status-inprogress { background-color: #cfe2ff; color: #0a58ca; } /* Blue */
.status-cancelled { background-color: #f8d7da; color: #842029; } /* Red */
.status-quoted { background-color: #fff3cd; color: #664d03; } /* Yellow */
.status-onhold { background-color: #f8f9fa; color: #6c757d; border: 1px solid #ccc; } /* Grey outline */
.status-completed { background-color: #d1e7dd; color: #0f5132; } /* Green */
.status-approved { background-color: #cff4fc; color: #055160; } /* Cyan */
.status-default { background-color: #eee; color: #555; } /* Fallback */


/* --- Action Cell Styling --- */
.action-cell {
   text-align: center;
}
.action-icon {
   color: #003870; /* Blue icon color */
   cursor: pointer;
}
 .action-icon:hover {
   color: #002a52;
 }


/* --- Pagination Placeholder Styling --- */
.pagination-controls {
  margin-top: 20px;
  text-align: right;
  font-size: 14px;
  color: #666;
}
.pagination-controls button {
   margin: 0 3px;
   padding: 5px 10px;
   border: 1px solid #ccc;
   background-color: #fff;
   cursor: pointer;
   border-radius: 4px;
}
.pagination-controls button:hover {
   background-color: #f0f0f0;
}

.search-icon {
  position: absolute;
  left: 10px; /* Adjust pixel value for desired space from left edge */
  top: 50%;
  transform: translateY(-50%); /* Vertically centers the icon */
  color: #aaa; /* Or your desired icon color */
  pointer-events: none;
  width: 16px; /* Match icon size */
  height: 16px;
  z-index: 10; /* Keep z-index */
}


</style>
