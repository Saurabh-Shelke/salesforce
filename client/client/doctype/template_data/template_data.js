frappe.ui.form.on('Template Data', {
    refresh(frm) {
        // Set the template field to "WELDING DEFECTS" and make it read-only
        frm.set_value('template', 'WELDING DEFECTS');
        frm.set_df_property('template', 'read_only', 1);

        // Trigger the template logic on form refresh
        if (frm.doc.template === 'WELDING DEFECTS') {
            console.log("Fixed Template Value: WELDING DEFECTS");

            frappe.call({
                method: "frappe.client.get",
                args: {
                    doctype: "Template List",
                    name: 'WELDING DEFECTS'
                },
                callback: function(r) {
                    console.log("Template Response:", r);
                    if (r.message) {
                        const template = r.message;
                        const template_details = template.details || [];
                        console.log("Template Details:", template_details);

                        // Clear existing table rows
                        frm.clear_table('details');

                        // Add rows from template
                        template_details.forEach(detail => {
                            let child = frm.add_child('details');
                            child.defects = detail.defects;
                            child.ok = detail.ok;
                            child.not_ok = detail.not_ok;
                            child.remark = detail.remark;
                            console.log("Added Row:", child);
                        });

                        frm.refresh_field('details');
                   
                    } else {
                        frappe.msgprint("No template data found for WELDING DEFECTS.");
                    }
                },
                error: function(err) {
                    console.error("Fetch Error:", err);
                    frappe.msgprint("Error fetching template: " + err.message);
                }
            });
        } else {
            // Clear table if template is not set
            frm.clear_table('details');
            // frm.refresh_field('details');
            frappe.msgprint("Table cleared.");
        }
    }
});
frappe.ui.form.on('Template Data', {
    refresh(frm) {
        // Set the template1 field to "FLOOR ASSLY" and make it read-only
        frm.set_value('template1', 'FLOOR ASSLY');
        frm.set_df_property('template1', 'read_only', 1);

        // Trigger the template logic on form refresh
        if (frm.doc.template1 === 'FLOOR ASSLY') {
            console.log("Fixed Template Value: FLOOR ASSLY");

            frappe.call({
                method: "frappe.client.get",
                args: {
                    doctype: "Template List",
                    name: 'FLOOR ASSLY'
                },
                callback: function(r) {
                    console.log("Template Response:", r);
                    if (r.message) {
                        const template = r.message;
                        const template_details = template.details || [];
                        console.log("Template Details:", template_details);

                        // Clear existing table rows
                        frm.clear_table('details1');

                        // Add rows from template
                        template_details.forEach(detail => {
                            let child = frm.add_child('details1');
                            child.defects = detail.defects;
                            child.ok = detail.ok;
                            child.not_ok = detail.not_ok;
                            child.remark = detail.remark;
                            console.log("Added Row:", child);
                        });

                        frm.refresh_field('details1');
                     
                    } else {
                        frappe.msgprint("No template data found for FLOOR ASSLY.");
                    }
                },
                error: function(err) {
                    console.error("Fetch Error:", err);
                    frappe.msgprint("Error fetching template: " + err.message);
                }
            });
        } else {
            // Clear table if template is not set
            frm.clear_table('details1');
            // frm.refresh_field('details1');
            frappe.msgprint("Table cleared.");
        }
    }
});


frappe.ui.form.on('Template Data', {
    refresh(frm) {
        // Set the template1 field to "FLOOR ASSLY" and make it read-only
        frm.set_value('template2', 'TOP STRUCTURE');
        frm.set_df_property('template2', 'read_only', 1);

        // Trigger the template logic on form refresh
        if (frm.doc.template2 === 'TOP STRUCTURE') {
            console.log("Fixed Template Value: FLOOR ASSLY");

            frappe.call({
                method: "frappe.client.get",
                args: {
                    doctype: "Template List",
                    name: 'TOP STRUCTURE'
                },
                callback: function(r) {
                    console.log("Template Response:", r);
                    if (r.message) {
                        const template = r.message;
                        const template_details = template.details || [];
                        console.log("Template Details:", template_details);

                        // Clear existing table rows
                        frm.clear_table('table_ksbc');

                        // Add rows from template
                        template_details.forEach(detail => {
                            let child = frm.add_child('table_ksbc');
                            child.defects = detail.defects;
                            child.ok = detail.ok;
                            child.not_ok = detail.not_ok;
                            child.remark = detail.remark;
                            console.log("Added Row:", child);
                        });

                        frm.refresh_field('table_ksbc');
                     
                    } else {
                        frappe.msgprint("No template data found for SIDE PANEL.");
                    }
                },
                error: function(err) {
                    console.error("Fetch Error:", err);
                    frappe.msgprint("Error fetching template: " + err.message);
                }
            });
        } else {
            // Clear table if template is not set
            frm.clear_table('table_ksbc');
            // frm.refresh_field('details3');
            frappe.msgprint("Table cleared.");
        }
    }
});

frappe.ui.form.on('Template Data', {
    refresh(frm) {
        // Set the template1 field to "FLOOR ASSLY" and make it read-only
        frm.set_value('template3', 'SIDE PANEL');
        frm.set_df_property('template3', 'read_only', 1);

        // Trigger the template logic on form refresh
        if (frm.doc.template3 === 'SIDE PANEL') {
            console.log("Fixed Template Value: FLOOR ASSLY");

            frappe.call({
                method: "frappe.client.get",
                args: {
                    doctype: "Template List",
                    name: 'SIDE PANEL'
                },
                callback: function(r) {
                    console.log("Template Response:", r);
                    if (r.message) {
                        const template = r.message;
                        const template_details = template.details || [];
                        console.log("Template Details:", template_details);

                        // Clear existing table rows
                        frm.clear_table('details3');

                        // Add rows from template
                        template_details.forEach(detail => {
                            let child = frm.add_child('details3');
                            child.defects = detail.defects;
                            child.ok = detail.ok;
                            child.not_ok = detail.not_ok;
                            child.remark = detail.remark;
                            console.log("Added Row:", child);
                        });

                        frm.refresh_field('details3');
                     
                    } else {
                        frappe.msgprint("No template data found for SIDE PANEL.");
                    }
                },
                error: function(err) {
                    console.error("Fetch Error:", err);
                    frappe.msgprint("Error fetching template: " + err.message);
                }
            });
        } else {
            // Clear table if template is not set
            frm.clear_table('details3');
            // frm.refresh_field('details3');
            frappe.msgprint("Table cleared.");
        }
    }
});

frappe.ui.form.on('Template Data', {
    refresh(frm) {
        // Set the template1 field to "FLOOR ASSLY" and make it read-only
        frm.set_value('template4', 'TAIL GATE');
        frm.set_df_property('template4', 'read_only', 1);

        // Trigger the template logic on form refresh
        if (frm.doc.template4 === 'TAIL GATE') {
            console.log("Fixed Template Value: FLOOR ASSLY");

            frappe.call({
                method: "frappe.client.get",
                args: {
                    doctype: "Template List",
                    name: 'TAIL GATE'
                },
                callback: function(r) {
                    console.log("Template Response:", r);
                    if (r.message) {
                        const template = r.message;
                        const template_details = template.details || [];
                        console.log("Template Details:", template_details);

                        // Clear existing table rows
                        frm.clear_table('details4');

                        // Add rows from template
                        template_details.forEach(detail => {
                            let child = frm.add_child('details4');
                            child.defects = detail.defects;
                            child.ok = detail.ok;
                            child.not_ok = detail.not_ok;
                            child.remark = detail.remark;
                            console.log("Added Row:", child);
                        });

                        frm.refresh_field('details4');
                     
                    } else {
                        frappe.msgprint("No template data found for SIDE PANEL.");
                    }
                },
                error: function(err) {
                    console.error("Fetch Error:", err);
                    frappe.msgprint("Error fetching template: " + err.message);
                }
            });
        } else {
            // Clear table if template is not set
            frm.clear_table('details4');
            // frm.refresh_field('details3');
            frappe.msgprint("Table cleared.");
        }
    }
});

frappe.ui.form.on('Template Data', {
    refresh(frm) {
        // Set the template1 field to "FLOOR ASSLY" and make it read-only
        frm.set_value('template5', 'FRONT PANEL');
        frm.set_df_property('template5', 'read_only', 1);

        // Trigger the template logic on form refresh
        if (frm.doc.template5 === 'FRONT PANEL') {
            console.log("Fixed Template Value: FLOOR ASSLY");

            frappe.call({
                method: "frappe.client.get",
                args: {
                    doctype: "Template List",
                    name: 'FRONT PANEL'
                },
                callback: function(r) {
                    console.log("Template Response:", r);
                    if (r.message) {
                        const template = r.message;
                        const template_details = template.details || [];
                        console.log("Template Details:", template_details);

                        // Clear existing table rows
                        frm.clear_table('details5');

                        // Add rows from template
                        template_details.forEach(detail => {
                            let child = frm.add_child('details5');
                            child.defects = detail.defects;
                            child.ok = detail.ok;
                            child.not_ok = detail.not_ok;
                            child.remark = detail.remark;
                            console.log("Added Row:", child);
                        });

                        frm.refresh_field('details5');
                     
                    } else {
                        frappe.msgprint("No template data found for SIDE PANEL.");
                    }
                },
                error: function(err) {
                    console.error("Fetch Error:", err);
                    frappe.msgprint("Error fetching template: " + err.message);
                }
            });
        } else {
            // Clear table if template is not set
            frm.clear_table('details5');
            // frm.refresh_field('details3');
            frappe.msgprint("Table cleared.");
        }
    }
});

frappe.ui.form.on('Template Data', {
    refresh: function(frm) {
        // Hide all Add Row buttons in the form
        frm.$wrapper.find('.grid-add-row').hide();
    }
});






