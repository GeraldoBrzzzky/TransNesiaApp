const { app, BrowserWindow, ipcMain } = require('electron');
const path = require('path');
const fs = require('fs');

function createWindow() {
    const win = new BrowserWindow({
        width: 1200,
        height: 800,
        webPreferences: {
            nodeIntegration: true,
            contextIsolation: false
        }
    });

    win.loadFile('index.html');
}

app.whenReady().then(() => {
    createWindow();
});

// Menerima perintah simpan ke Excel/CSV dari halaman HTML secara real-time
ipcMain.on('save-to-excel', (event, booking) => {
    const filePath = path.join(app.getPath('documents'), 'Data_Pesanan_TransNesia.csv');
    
    // Format baris CSV dengan pemisah titik koma (;) untuk Excel Indonesia
    const rowData = `"${booking.id}";"${booking.passengerName}";"${booking.origin} - ${booking.dest}";"${booking.date}";"${booking.busName}";"${booking.seats.join(' | ')}";"${booking.paymentMethod}";"${booking.accountNumber}";"Rp ${booking.totalPrice.toLocaleString('id-ID')}"\n`;

    // Jika file belum ada, buat header kolom dengan UTF-8 BOM (\ufeff)
    if (!fs.existsSync(filePath)) {
        const header = `\ufeff"ID Pesanan";"Nama Penumpang";"Rute";"Tanggal";"Bus";"Kursi";"Metode Pembayaran";"No. Rekening/HP";"Total Harga"\n`;
        fs.writeFileSync(filePath, header, 'utf8');
    }

    // Tambahkan data baru secara real-time ke file
    fs.appendFile(filePath, rowData, 'utf8', (err) => {
        if (err) {
            console.error('Gagal menyimpan data ke Excel:', err);
        } else {
            console.log('Data berhasil disimpan ke:', filePath);
        }
    });
});