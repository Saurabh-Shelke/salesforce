frappe.ui.form.on('Template Data', {
    onload(frm) {
        // Set template fields and make them read-only for new forms
        if (frm.is_new()) {
            frm.set_value('template', 'WELDING DEFECTS');
            frm.set_df_property('template', 'read_only', 1);

            frm.set_value('template1', 'FLOOR ASSLY');
            frm.set_df_property('template1', 'read_only', 1);

            frm.set_value('template2', 'TOP STRUCTURE');
            frm.set_df_property('template2', 'read_only', 1);

            frm.set_value('template3', 'SIDE PANEL');
            frm.set_df_property('template3', 'read_only', 1);

            frm.set_value('template4', 'TAIL GATE');
            frm.set_df_property('template4', 'read_only', 1);

            frm.set_value('template5', 'FRONT PANEL');
            frm.set_df_property('template5', 'read_only', 1);
        }
    },

    refresh(frm) {
        // Hide all Add Row buttons in the form
        frm.$wrapper.find('.grid-add-row').hide();
    },

    // WELDING DEFECTS
    template(frm) {
        if (frm.doc.template === 'WELDING DEFECTS' && frm.is_new()) {
            console.log("Fixed Template Value: WELDING DEFECTS");
            fetch_template_data(frm, 'WELDING DEFECTS', 'details');
        } else if (!frm.doc.template) {
            frm.clear_table('details');
            frm.refresh_field('details');
            frappe.msgprint("Details table cleared.");
        }
    },

    // FLOOR ASSLY
    template1(frm) {
        if (frm.doc.template1 === 'FLOOR ASSLY' && frm.is_new()) {
            console.log("Fixed Template Value: FLOOR ASSLY");
            fetch_template_data(frm, 'FLOOR ASSLY', 'details1');
        } else if (!frm.doc.template1) {
            frm.clear_table('details1');
            frm.refresh_field('details1');
            frappe.msgprint("Details1 table cleared.");
        }
    },

    // TOP STRUCTURE
    template2(frm) {
        if (frm.doc.template2 === 'TOP STRUCTURE' && frm.is_new()) {
            console.log("Fixed Template Value: TOP STRUCTURE");
            fetch_template_data(frm, 'TOP STRUCTURE', 'table_ksbc');
        } else if (!frm.doc.template2) {
            frm.clear_table('table_ksbc');
            frm.refresh_field('table_ksbc');
            frappe.msgprint("Table_ksbc table cleared.");
        }
    },

    // SIDE PANEL
    template3(frm) {
        if (frm.doc.template3 === 'SIDE PANEL' && frm.is_new()) {
            console.log("Fixed Template Value: SIDE PANEL");
            fetch_template_data(frm, 'SIDE PANEL', 'details3');
        } else if (!frm.doc.template3) {
            frm.clear_table('details3');
            frm.refresh_field('details3');
            frappe.msgprint("Details3 table cleared.");
        }
    },

    // TAIL GATE
    template4(frm) {
        if (frm.doc.template4 === 'TAIL GATE' && frm.is_new()) {
            console.log("Fixed Template Value: TAIL GATE");
            fetch_template_data(frm, 'TAIL GATE', 'details4');
        } else if (!frm.doc.template4) {
            frm.clear_table('details4');
            frm.refresh_field('details4');
            frappe.msgprint("Details4 table cleared.");
        }
    },

    // FRONT PANEL
    template5(frm) {
        if (frm.doc.template5 === 'FRONT PANEL' && frm.is_new()) {
            console.log("Fixed Template Value: FRONT PANEL");
            fetch_template_data(frm, 'FRONT PANEL', 'details5');
        } else if (!frm.doc.template5) {
            frm.clear_table('details5');
            frm.refresh_field('details5');
            frappe.msgprint("Details5 table cleared.");
        }
    },

    before_save(frm) {
        // Log the current state of all tables before saving
        console.log("Details Table Before Save:", frm.doc.details);
        console.log("Details1 Table Before Save:", frm.doc.details1);
        console.log("Table_ksbc Table Before Save:", frm.doc.table_ksbc);
        console.log("Details3 Table Before Save:", frm.doc.details3);
        console.log("Details4 Table Before Save:", frm.doc.details4);
        console.log("Details5 Table Before Save:", frm.doc.details5);
    },

    after_save(frm) {
        // Log the saved state of all tables
        console.log("Details Table After Save:", frm.doc.details);
        console.log("Details1 Table After Save:", frm.doc.details1);
        console.log("Table_ksbc Table After Save:", frm.doc.table_ksbc);
        console.log("Details3 Table After Save:", frm.doc.details3);
        console.log("Details4 Table After Save:", frm.doc.details4);
        console.log("Details5 Table After Save:", frm.doc.details5);
    }
});

// Helper function to fetch template data and populate table
function fetch_template_data(frm, template_name, table_field) {
    frappe.call({
        method: "frappe.client.get",
        args: {
            doctype: "Template List",
            name: template_name
        },
        callback: function(r) {
            console.log(`Template Response for ${template_name}:`, r);
            if (r.message) {
                const template = r.message;
                const template_details = template.details || [];
                console.log(`Template Details for ${template_name}:`, template_details);

                // Clear existing table rows
                frm.clear_table(table_field);

                // Add rows from template
                template_details.forEach(detail => {
                    let child = frm.add_child(table_field);
                    child.defects = detail.defects;
                    child.ok = detail.ok;
                    child.not_ok = detail.not_ok;
                    child.remark = detail.remark;
                    console.log(`Added Row to ${table_field}:`, child);
                });

                // Refresh the table
                frm.refresh_field(table_field);

                // Make ok, not_ok, and remark fields editable
                frm.fields_dict[table_field].grid.docfields.forEach(field => {
                    if (['ok', 'not_ok', 'remark'].includes(field.fieldname)) {
                        frm.set_df_property(table_field, field.fieldname, 'read_only', 0);
                    }
                });
            } else {
                frappe.msgprint(`No template data found for ${template_name}.`);
            }
        },
        error: function(err) {
            console.error(`Fetch Error for ${template_name}:`, err);
            frappe.msgprint(`Error fetching template ${template_name}: ${err.message}`);
        }
    });
}

frappe.ui.form.on('Template Data', {
    refresh: function(frm) {
        // Hide all Add Row buttons in the form
        frm.$wrapper.find('.grid-add-row').hide();
    }
});