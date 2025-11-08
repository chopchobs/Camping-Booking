import { 
    Page, Text,  View, 
    Document, StyleSheet, 
    PDFViewer, Font,
    PDFDownloadLink
} from '@react-pdf/renderer';
import { formatDate } from '@/utils/Formats';
import { FileText,RotateCw } from 'lucide-react';
// Register font
Font.register({
  family: 'NotoSansThai',
  src: '/Fonts/NotoSansThai.ttf',
});
// Style Invoice
const styles = StyleSheet.create({
  // 📄 หน้าเอกสารหลัก
  page: {
    padding: 32,
    fontSize: 11,
    color: '#111',
    fontFamily: 'NotoSansThai',
    backgroundColor: '#FFFFFF', // ขาวสะอาดเหมาะกับเอกสาร
    lineHeight: 1.5,
  },

  // 📦 section
  section: {
    marginBottom: 16,
  },

  // 🧾  (Header)
  header: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'flex-start',
    marginBottom: 18,
    fontWeight: 'bold',
    fontSize: 16,
  },

  // 📊 table
  table: {
    display: 'table',
    width: '100%',
    borderStyle: 'solid',
    borderWidth: 1,
    borderColor: '#999',
    marginBottom: 16,
    borderRadius: 4,
    overflow: 'hidden',
  },

  // 📏 row
  row: {
    flexDirection: 'row',
  },

  // 🔠 cellHeader
  cellHeader: {
    flex: 1,
    padding: 6,
    fontWeight: 'bold',
    fontSize: 11,
    textAlign: 'center',
    backgroundColor: '#f5f5f5',
    borderRightWidth: 1,
    borderRightColor: '#ccc',
    borderBottomWidth: 1,
    borderBottomColor: '#ccc',
  },

  // 🔤 cell
  cell: {
    flex: 1,
    padding: 6,
    fontSize: 10,
    textAlign: 'center',
    borderRightWidth: 1,
    borderRightColor: '#ddd',
    borderBottomWidth: 1,
    borderBottomColor: '#eee',
  },

  // 💰 total
  total: {
    marginTop: 10,
    fontSize: 13,
    fontWeight: 'bold',
    textAlign: 'right',
    borderTopWidth: 1,
    borderTopColor: '#000',
    paddingTop: 6,
  },
});
const BookingInvoice = ({ booking }) => (
  <Document>
    <Page size="A4" style={styles.page}>
      {/* Invoice */}
      <View style={styles.section}>
        <Text style={styles.header}>CHOP CHEESE Development Co., Ltd.</Text>
        <Text>Booking Number: {booking.id}</Text>
        <Text>DESCRIPTION: {booking.landmark.title}</Text>
        <Text>DAY: {formatDate(new Date())}</Text>
      </View>

      {/* Table */}
      <View style={styles.table}>
        <View style={styles.row}>
          <Text style={styles.cellHeader}>Total Night </Text>
          <Text style={styles.cellHeader}>Total(THB)</Text>
          <Text style={styles.cellHeader}>Check In</Text>
          <Text style={styles.cellHeader}>Check Out</Text>
        </View>
        <View style={styles.row}>
          <Text style={styles.cell}>{booking.totalNights} Day</Text>
          <Text style={styles.cell}>{booking.total} BAHT</Text>
          <Text style={styles.cell}>{formatDate(booking.checkIn)}</Text>
          <Text style={styles.cell}>{formatDate(booking.checkOut)}</Text>
        </View>
      </View>

      {/* สรุปยอดรวม */}
      <View style={styles.section}>
        <Text style={styles.total}>Total Amount: {booking.total} BAHT</Text>
      </View>
    </Page>
  </Document>
);
const BookingPDF = ({booking}) => {
  return (
    <div className='flex justify-center'>
        <PDFDownloadLink
            document={<BookingInvoice booking={booking}/>}
            fileName={`Invoice-${booking.id}.pdf`}
            >
        {({loading})=>
            loading?<RotateCw className='animate-spin'/>:<FileText/>
        }
        </PDFDownloadLink>
    </div>
  )
}
export default BookingPDF; 
