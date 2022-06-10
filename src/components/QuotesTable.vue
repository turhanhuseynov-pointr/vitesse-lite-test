<template>
    <q-table :rows="rows" :columns="columns" row-key="name">
        <template #top>
            My Quotes
            <q-space />
            <q-btn color="primary px-4" dense @click="createNewQuote">
                New Quote
            </q-btn>
        </template>
        <template #body="props">
            <q-tr :props="props">
                <q-td class="quote-row" v-for="col in props.cols" :key="col.name" :props="props"
                    @click="props.expand = !props.expand">
                    {{ col.value }}
                </q-td>
                <q-td auto-width>
                    <q-btn class="px-4" size="sm" color="secondary" dense @click="createNewVersion">
                        New Version
                    </q-btn>
                </q-td>
            </q-tr>
            <q-tr v-show="props.expand" :props="props">
                <q-td colspan="100%">
                    <div class="row version mb-2" v-for="(version, i) in  props.row.versions" :key="i">
                        <div class="col version-title block mr-4 p-2" @click="viewEditVersion">
                            Version: {{ version }}
                        </div>
                        <div class="col-1 self-center">
                            <q-btn class="px-4" size="sm" color="red" dense @click="deleteVersion">
                                Delete
                            </q-btn>
                        </div>
                    </div>
                </q-td>
            </q-tr>
        </template>
    </q-table>
</template>

<script lang="ts" setup>
import { QTableProps } from 'quasar'

const columns: QTableProps['columns'] = [
    { name: 'client', label: 'Client', field: (row: any) => row.name, sortable: true },
    { name: 'partner', label: 'Partner', field: 'partner', sortable: true },
    { name: 'date', label: 'Date', field: 'date', sortable: true },
    { name: 'status', label: 'Status', field: 'status', sortable: true },
    { name: 'remarks', label: 'Remarks', field: 'remarks', sortable: true },
    { name: "buttons", label: "", field: "buttons" }
]
const rows: Array<QuoteRow> = [
    {
        name: "client1",
        client: "Client 1",
        partner: "Partner 1",
        date: "12/06/22",
        status: "DONE",
        remarks: "",
        versions: [1, 2]
    },
    {
        name: "client2",
        client: "Client 2",
        partner: "Partner 2",
        date: "12/06/22",
        status: "DONE",
        remarks: "",
        versions: [3, 4]
    },

]

function createNewVersion() {
    console.log("Create new version")
}

function createNewQuote() {
    console.log("Create new quote")
}

function deleteVersion() {
    console.log("Delete version")
}

function viewEditVersion() {
    console.log("View/Edit version")
}
</script>

<style lang="scss" scoped>
.quote-row:hover {
    cursor: pointer;
}

.version {
    .version-title {
        cursor: pointer;

        &:hover {
            background: lightgray;
        }
    }
}
</style>