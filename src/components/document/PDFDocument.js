import React from 'react'
import { Page, Text, View, Document, StyleSheet, PDFViewer } from '@react-pdf/renderer';

const styles = StyleSheet.create({
    page: {
        flexDirection: 'column',
        backgroundColor: '#E4E4E4'
    },
    section: {
        margin: 10,
        padding: 10,
        flexGrow: 1
    }
});
const PDFDocument = () => {
    return (
        <Document>
            <Page size="A4" style={styles.page}>
                <View style={styles.section}>
                    <Text>Excepteur officia sunt minim magna. Anim do ex nulla aliquip aute non quis enim et adipisicing ea. Excepteur sunt nostrud aliqua enim laborum sint excepteur laborum magna proident ut. Cillum reprehenderit ea dolore amet fugiat cupidatat do veniam. Occaecat minim nisi ex ad laborum ipsum ea laborum aliquip.</Text>
                </View>
                <View style={styles.section}>
                    <Text>Section #2</Text>
                </View>
            </Page>
        </Document>
    )
}

export default PDFDocument
