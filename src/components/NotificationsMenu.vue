<template>
  <div class="notifications-menu">
    <div class="menu-header">
      <h3>Alerts & Notifications</h3>
      <button class="mark-read-btn">
        <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><polyline points="20 6 9 17 4 12"></polyline></svg>
        Mark all as read
      </button>
    </div>

    <div class="menu-tabs">
      <button class="tab active">All <span class="count">20</span></button>
      <button class="tab">Recommendations <span class="count">8</span></button>
    </div>

    <ul class="notification-list">
      <li v-for="alert in alerts" :key="alert.id" class="notification-item alert-item">
        <div class="item-icon alert-icon">JR</div> <div class="item-content">
          <p class="item-title">{{ alert.title }}</p>
          <p class="item-meta">{{ alert.time }} • {{ alert.source }}</p>
        </div>
        <div class="item-actions">
           <button class="view-btn">
              <svg xmlns="http://www.w3.org/2000/svg" width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><path d="M1 12s4-8 11-8 11 8 11 8-4 8-11 8-11-8-11-8z"></path><circle cx="12" cy="12" r="3"></circle></svg>
              View JR
           </button>
           <button v-if="alert.canDismiss" class="dismiss-btn">&times;</button> </div>
      </li>

      <li class="section-title">Notifications</li>

      <li v-for="notification in notifications" :key="notification.id" class="notification-item">
         <div class="item-icon notification-icon">(i)</div> <div class="item-content">
            <p class="item-meta">{{ notification.time }}</p>
            <p class="item-details" v-html="notification.details"></p>
         </div>
         <div class="item-dot"></div> </li>
    </ul>
  </div>
</template>

<script setup>
import { ref } from 'vue';

// Mock Data (replace with real data/props later)
const alerts = ref([
  { id: 'a1', title: 'JR Posted', time: '12 Mar, 2024', source: 'Mubadla', canDismiss: true },
  { id: 'a2', title: 'In Person Invitation', time: '12 Mar, 2024', source: 'Takafo +', canDismiss: false },
  { id: 'a3', title: 'Job Offer recieved', time: '12 Mar, 2024', source: 'Takafo +', canDismiss: false },
]);

const notifications = ref([
  { id: 'n1', time: '30 minutes ago', details: 'You have received a request to log in to the Takafo+ Delivery Partner Portal. Please <a href="#">Click here</a> to set up your password and access your workspace.' },
  { id: 'n2', time: '30 minutes ago', details: 'A new request has been created by Recruitment Support. <a href="#">View</a>' },
  { id: 'n3', time: '30 minutes ago', details: 'You received a Purchase Order Document from Recruitment Support. <a href="#">View</a>' },
]);

// Bro add methods for mark as read, tab switching
</script>

<style scoped>
.notifications-menu {
  background-color: white;
  border-radius: 8px;
  box-shadow: 0 5px 15px rgba(0, 0, 0, 0.15);
  width: 400px;
  max-height: 80vh;
  display: flex;
  flex-direction: column;
  overflow: hidden;
  border: 1px solid #eee;
}

.menu-header {
  display: flex;
  justify-content: space-between;
  align-items: center;
  padding: 15px 20px;
  border-bottom: 1px solid #eee;
}
.menu-header h3 {
  margin: 0;
  font-size: 16px;
  font-weight: 600;
}
.mark-read-btn {
  background: none;
  border: none;
  color: #003870;
  font-size: 13px;
  font-weight: 500;
  cursor: pointer;
  display: flex;
  align-items: center;
  gap: 4px;
}
 .mark-read-btn svg { stroke-width: 2.5; }


.menu-tabs {
  display: flex;
  padding: 10px 20px;
  border-bottom: 1px solid #eee;
  gap: 20px;
}
.tab {
  background: none;
  border: none;
  padding: 5px 0;
  font-size: 14px;
  font-weight: 500;
  color: #666;
  cursor: pointer;
  border-bottom: 2px solid transparent;
}
.tab.active {
  color: #003870;
  border-bottom-color: #003870;
}
.tab .count {
  display: inline-block;
  background-color: #eee;
  color: #555;
  font-size: 11px;
  padding: 1px 6px;
  border-radius: 10px;
  margin-left: 5px;
}
 .tab.active .count {
    background-color: #003870;
    color: white;
 }

.notification-list {
  list-style: none;
  margin: 0;
  padding: 0;
  overflow-y: auto;
  flex-grow: 1;
}

.notification-item {
  display: flex;
  align-items: center;
  padding: 15px 20px;
  border-bottom: 1px solid #eee;
  gap: 15px;
}
 .notification-item:last-child {
    border-bottom: none;
 }

.item-icon {
  width: 36px;
  height: 36px;
  border-radius: 50%;
  display: flex;
  align-items: center;
  justify-content: center;
  flex-shrink: 0;
  font-weight: bold;
}
.alert-icon { background-color: #e0f2fe; color: #0369a1; font-size: 12px; }
.notification-icon { background-color: #ecfdf5; color: #047857; font-size: 18px; }

.item-content {
  flex-grow: 1;
}
.item-title { margin: 0 0 2px 0; font-weight: 500; font-size: 14px; color: #333; }
.item-meta { margin: 0; font-size: 12px; color: #777; }
.item-details { margin: 5px 0 0 0; font-size: 14px; color: #444; line-height: 1.4;}
.item-details :deep(a) { color: #003870; text-decoration: none; font-weight: 500;}
.item-details :deep(a:hover) { text-decoration: underline;}


.item-actions { display: flex; align-items: center; gap: 10px; }
.view-btn { background: none; border: none; color: #003870; font-size: 13px; font-weight: 500; cursor: pointer; display: flex; align-items: center; gap: 4px;}
.view-btn svg { width: 16px; height: 16px; }
.dismiss-btn { background: none; border: none; color: #aaa; font-size: 20px; font-weight: bold; cursor: pointer; line-height: 1;}
.dismiss-btn:hover { color: #555;}

.section-title {
   padding: 10px 20px;
   font-size: 14px;
   font-weight: 600;
   color: #333;
   background-color: #f8f9fa;
   border-bottom: 1px solid #eee;
}

.item-dot {
    width: 8px;
    height: 8px;
    background-color: #003870;
    border-radius: 50%;
    flex-shrink: 0;
}

</style>
