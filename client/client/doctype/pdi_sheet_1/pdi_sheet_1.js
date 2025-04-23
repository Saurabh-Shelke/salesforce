frappe.ui.form.on('PDI SHEET 1', {
    template(frm) {
        console.log("Custom Template Changed:", frm.doc.template);
      

        if (frm.doc.template) {
            frappe.call({
                method: "frappe.client.get",
                args: {
                    doctype: "PDI CHECK SHEET 1",
                    name: frm.doc.template
                },
                callback: function(r) {
                    console.log("Template Response:", r);
                    if (r.message) {
                        const template = r.message;
                        const template_details = template.details || [];
                        console.log("Template Details:", template_details);

                        // Clear existing table rows
                        frm.clear_table('checksheet_details');

                        // Add rows from template
                        template_details.forEach(detail => {
                            let child = frm.add_child('checksheet_details');
                            child.checkpoint = detail.checkpoint;
                            child.standardverification = detail.standardverification;
                            child.measuring_method = detail.measuring_method;
                            child.observation = detail.observation;
                            child.remark = detail.remark;
                            console.log("Added Row:", child);
                        });

                        frm.refresh_field('checksheet_details');
        
                    } else {
                        frappe.msgprint("No template data found.");
                    }
                },
                error: function(err) {
                    console.error("Fetch Error:", err);
                    frappe.msgprint("Error fetching template: " + err.message);
                }
            });
        } else {
            // Clear table if no template is selected
            frm.clear_table('checksheet_details');
            frm.refresh_field('checksheet_details');
            frappe.msgprint("Table cleared.");
        }
    }
});